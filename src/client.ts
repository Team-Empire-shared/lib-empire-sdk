import { APIError, QuotaExceededError, RateLimitError } from "./errors";
import type {
  AgentChatRequest,
  AgentChatResponse,
  ApprovalDecision,
  ApprovalRead,
  ApiKeyCreate,
  ApiKeyCreateResponse,
  ApiKeyListResponse,
  MultiTurnResponse,
  TaskCreate,
  TaskRead,
  TaskUpdate,
  UserMeRead,
  WebhookDeliveryListResponse,
  WebhookEndpointCreate,
  WebhookEndpointCreateResponse,
  WebhookEndpointListResponse,
} from "./types";

export interface ClientOptions {
  baseUrl: string;
  apiKey: string;
  maxRetries?: number;
  backoffMs?: number;
  onRequestEvent?: (event: RequestEvent) => void;
}

export interface RequestEvent {
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  path: string;
  attempt: number;
  statusCode: number;
  durationMs: number;
  requestId?: string;
  retriable: boolean;
  retried: boolean;
  errorType?: string;
}

const RETRYABLE_STATUS = new Set([429, 502, 503, 504]);

function parseRetryAfterSeconds(value: string | null): number | undefined {
  if (!value) return undefined;
  const parsed = Number(value);
  if (!Number.isFinite(parsed) || parsed < 0) return undefined;
  return parsed;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export class NidinBOSClient {
  private readonly baseUrl: string;
  private readonly apiKey: string;
  private readonly maxRetries: number;
  private readonly backoffMs: number;
  private readonly onRequestEvent?: (event: RequestEvent) => void;

  constructor(options: ClientOptions) {
    this.baseUrl = options.baseUrl.replace(/\/+$/, "");
    this.apiKey = options.apiKey;
    this.maxRetries = Math.max(0, options.maxRetries ?? 2);
    this.backoffMs = Math.max(0, options.backoffMs ?? 500);
    this.onRequestEvent = options.onRequestEvent;
  }

  private async request<T>(
    method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE",
    path: string,
    opts: { body?: unknown; expectedStatus?: number[] } = {},
  ): Promise<T> {
    const expected = new Set(opts.expectedStatus ?? [200]);
    let lastError: APIError | undefined;

    for (let attempt = 0; attempt <= this.maxRetries; attempt += 1) {
      const started = Date.now();
      const response = await fetch(`${this.baseUrl}${path}`, {
        method,
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: opts.body === undefined ? undefined : JSON.stringify(opts.body),
      });

      if (expected.has(response.status)) {
        this.onRequestEvent?.({
          method,
          path,
          attempt: attempt + 1,
          statusCode: response.status,
          durationMs: Number((Date.now() - started).toFixed(3)),
          requestId: response.headers.get("x-correlation-id") ?? undefined,
          retriable: false,
          retried: attempt > 0,
          errorType: undefined,
        });
        if (response.status === 204) return undefined as T;
        const text = await response.text();
        return (text ? JSON.parse(text) : undefined) as T;
      }

      let body: unknown = undefined;
      try {
        body = await response.json();
      } catch {
        body = undefined;
      }
      const requestId = response.headers.get("x-correlation-id") ?? undefined;
      const detail =
        typeof body === "object" && body !== null && "detail" in body
          ? String((body as { detail?: unknown }).detail ?? "")
          : undefined;
      const retryAfterSeconds = parseRetryAfterSeconds(response.headers.get("retry-after"));

      if (response.status === 429) {
        const quota = (detail ?? "").toLowerCase().includes("quota");
        if (quota) {
          lastError = new QuotaExceededError(
            "Daily quota exceeded",
            429,
            detail,
            requestId,
            body,
            retryAfterSeconds,
          );
        } else {
          lastError = new RateLimitError(
            "Rate limited by API",
            429,
            detail,
            requestId,
            body,
            retryAfterSeconds,
          );
        }
      } else {
        lastError = new APIError(`API request failed with status ${response.status}`, response.status, detail, requestId, body);
      }

      this.onRequestEvent?.({
        method,
        path,
        attempt: attempt + 1,
        statusCode: response.status,
        durationMs: Number((Date.now() - started).toFixed(3)),
        requestId,
        retriable: RETRYABLE_STATUS.has(response.status),
        retried: attempt > 0,
        errorType: lastError.name,
      });

      if (!RETRYABLE_STATUS.has(response.status) || attempt >= this.maxRetries) {
        break;
      }
      const delayMs =
        retryAfterSeconds !== undefined
          ? retryAfterSeconds * 1000
          : this.backoffMs * (2 ** attempt);
      if (delayMs > 0) {
        await sleep(delayMs);
      }
    }

    throw lastError ?? new APIError("Unknown request failure", 0);
  }

  authMe(): Promise<UserMeRead> {
    return this.request<UserMeRead>("GET", "/api/v1/auth/me");
  }

  listApiKeys(): Promise<ApiKeyListResponse> {
    return this.request<ApiKeyListResponse>("GET", "/api/v1/api-keys");
  }

  createApiKey(payload: ApiKeyCreate): Promise<ApiKeyCreateResponse> {
    return this.request<ApiKeyCreateResponse>("POST", "/api/v1/api-keys", {
      body: payload,
      expectedStatus: [201],
    });
  }

  revokeApiKey(keyId: number): Promise<void> {
    return this.request<void>("DELETE", `/api/v1/api-keys/${keyId}`, {
      expectedStatus: [200, 204],
    });
  }

  listWebhooks(): Promise<WebhookEndpointListResponse> {
    return this.request<WebhookEndpointListResponse>("GET", "/api/v1/webhooks");
  }

  createWebhook(payload: WebhookEndpointCreate): Promise<WebhookEndpointCreateResponse> {
    return this.request<WebhookEndpointCreateResponse>("POST", "/api/v1/webhooks", {
      body: payload,
      expectedStatus: [201],
    });
  }

  listWebhookDeliveries(endpointId: number, limit = 50, offset = 0): Promise<WebhookDeliveryListResponse> {
    const params = new URLSearchParams({ limit: String(limit), offset: String(offset) });
    return this.request<WebhookDeliveryListResponse>(
      "GET",
      `/api/v1/webhooks/${endpointId}/deliveries?${params.toString()}`,
    );
  }

  listTasks(): Promise<TaskRead[]> {
    return this.request<TaskRead[]>("GET", "/api/v1/tasks");
  }

  createTask(payload: TaskCreate): Promise<TaskRead> {
    return this.request<TaskRead>("POST", "/api/v1/tasks", {
      body: payload,
      expectedStatus: [201],
    });
  }

  updateTask(taskId: number, payload: TaskUpdate): Promise<TaskRead> {
    return this.request<TaskRead>("PATCH", `/api/v1/tasks/${taskId}`, {
      body: payload,
      expectedStatus: [200],
    });
  }

  listApprovals(): Promise<ApprovalRead[]> {
    return this.request<ApprovalRead[]>("GET", "/api/v1/approvals");
  }

  approveApproval(approvalId: number, payload: ApprovalDecision): Promise<ApprovalRead> {
    return this.request<ApprovalRead>("POST", `/api/v1/approvals/${approvalId}/approve`, {
      body: payload,
      expectedStatus: [200],
    });
  }

  listOrganizations(): Promise<Record<string, unknown>[]> {
    return this.request<Record<string, unknown>[]>("GET", "/api/v1/orgs");
  }

  listAutomationTriggers(): Promise<Record<string, unknown>[]> {
    return this.request<Record<string, unknown>[]>("GET", "/api/v1/automations/triggers");
  }

  listAutomationWorkflows(): Promise<Record<string, unknown>[]> {
    return this.request<Record<string, unknown>[]>("GET", "/api/v1/automations/workflows");
  }

  agentChat(payload: AgentChatRequest): Promise<AgentChatResponse> {
    return this.request<AgentChatResponse>("POST", "/api/v1/agents/chat", {
      body: payload,
    });
  }

  agentMultiTurn(payload: AgentChatRequest): Promise<MultiTurnResponse> {
    return this.request<MultiTurnResponse>("POST", "/api/v1/agents/multi-turn", {
      body: payload,
    });
  }

  // BEGIN GENERATED OPERATIONS
  deleteApiV1ApiKeysKeyId(key_id: string | number): Promise<unknown> {
    let path = `/api/v1/api-keys/${String(key_id)}`;
    return this.request<unknown>("DELETE", path, {
      expectedStatus: [204],
    });
  }

  deleteApiV1ApprovalsApprovalPatternsPatternId(pattern_id: string | number): Promise<unknown> {
    let path = `/api/v1/approvals/approval-patterns/${String(pattern_id)}`;
    return this.request<unknown>("DELETE", path, {
      expectedStatus: [204],
    });
  }

  deleteApiV1AutomationsRulesRuleId(rule_id: string | number): Promise<unknown> {
    let path = `/api/v1/automations/rules/${String(rule_id)}`;
    return this.request<unknown>("DELETE", path, {
      expectedStatus: [204],
    });
  }

  deleteApiV1AutomationsTriggersTriggerId(trigger_id: string | number): Promise<unknown> {
    let path = `/api/v1/automations/triggers/${String(trigger_id)}`;
    return this.request<unknown>("DELETE", path, {
      expectedStatus: [204],
    });
  }

  deleteApiV1ContactsContactId(contact_id: string | number): Promise<unknown> {
    let path = `/api/v1/contacts/${String(contact_id)}`;
    return this.request<unknown>("DELETE", path, {
      expectedStatus: [204],
    });
  }

  deleteApiV1DealsDealId(deal_id: string | number): Promise<unknown> {
    let path = `/api/v1/deals/${String(deal_id)}`;
    return this.request<unknown>("DELETE", path, {
      expectedStatus: [204],
    });
  }

  deleteApiV1DealsRequirementsReqId(req_id: string | number): Promise<unknown> {
    let path = `/api/v1/deals/requirements/${String(req_id)}`;
    return this.request<unknown>("DELETE", path, {
      expectedStatus: [204],
    });
  }

  deleteApiV1EgpnAdminAgreementsAgreementId(agreement_id: string | number): Promise<unknown> {
    let path = `/api/v1/egpn/admin/agreements/${String(agreement_id)}`;
    return this.request<unknown>("DELETE", path, {
      expectedStatus: [204],
    });
  }

  deleteApiV1EgpnAdminCommissionsCommissionId(commission_id: string | number): Promise<unknown> {
    let path = `/api/v1/egpn/admin/commissions/${String(commission_id)}`;
    return this.request<unknown>("DELETE", path, {
      expectedStatus: [204],
    });
  }

  deleteApiV1EgpnAdminOpportunitiesOppId(opp_id: string | number): Promise<unknown> {
    let path = `/api/v1/egpn/admin/opportunities/${String(opp_id)}`;
    return this.request<unknown>("DELETE", path, {
      expectedStatus: [204],
    });
  }

  deleteApiV1EgpnAdminPartnersPartnerId(partner_id: string | number): Promise<unknown> {
    let path = `/api/v1/egpn/admin/partners/${String(partner_id)}`;
    return this.request<unknown>("DELETE", path, {
      expectedStatus: [204],
    });
  }

  deleteApiV1EgpnAdminStudentApplicationsAppId(app_id: string | number): Promise<unknown> {
    let path = `/api/v1/egpn/admin/student-applications/${String(app_id)}`;
    return this.request<unknown>("DELETE", path, {
      expectedStatus: [204],
    });
  }

  deleteApiV1EgpnAdminStudentsStudentId(student_id: string | number): Promise<unknown> {
    let path = `/api/v1/egpn/admin/students/${String(student_id)}`;
    return this.request<unknown>("DELETE", path, {
      expectedStatus: [204],
    });
  }

  deleteApiV1EmpireDigitalSocialMediaPagesPageId(page_id: string | number): Promise<unknown> {
    let path = `/api/v1/empire-digital/social-media/pages/${String(page_id)}`;
    return this.request<unknown>("DELETE", path, {
      expectedStatus: [200],
    });
  }

  deleteApiV1LearningCoursesCourseId(course_id: string | number): Promise<unknown> {
    let path = `/api/v1/learning/courses/${String(course_id)}`;
    return this.request<unknown>("DELETE", path, {
      expectedStatus: [204],
    });
  }

  deleteApiV1LearningCoursesCourseIdLessonsLessonId(course_id: string | number, lesson_id: string | number): Promise<unknown> {
    let path = `/api/v1/learning/courses/${String(course_id)}/lessons/${String(lesson_id)}`;
    return this.request<unknown>("DELETE", path, {
      expectedStatus: [204],
    });
  }

  deleteApiV1RecruitmentCandidateDocumentsDocumentId(document_id: string | number): Promise<unknown> {
    let path = `/api/v1/recruitment/candidate-documents/${String(document_id)}`;
    return this.request<unknown>("DELETE", path, {
      expectedStatus: [204],
    });
  }

  deleteApiV1TasksTaskId(task_id: string | number, workspace_id?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/tasks/${String(task_id)}`;
    const query = new URLSearchParams();
    if (workspace_id !== undefined) query.set("workspace_id", String(workspace_id));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("DELETE", path, {
      expectedStatus: [204],
    });
  }

  deleteApiV1TasksTemplatesTemplateId(template_id: string | number): Promise<unknown> {
    let path = `/api/v1/tasks/templates/${String(template_id)}`;
    return this.request<unknown>("DELETE", path, {
      expectedStatus: [204],
    });
  }

  deleteApiV1WebhooksEndpointId(endpoint_id: string | number): Promise<unknown> {
    let path = `/api/v1/webhooks/${String(endpoint_id)}`;
    return this.request<unknown>("DELETE", path, {
      expectedStatus: [204],
    });
  }

  getApiV1AfterServicesJourneys(empire_person_id?: string | number | boolean, journey_type?: string | number | boolean, status?: string | number | boolean, limit?: string | number | boolean, offset?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/after-services/journeys/`;
    const query = new URLSearchParams();
    if (empire_person_id !== undefined) query.set("empire_person_id", String(empire_person_id));
    if (journey_type !== undefined) query.set("journey_type", String(journey_type));
    if (status !== undefined) query.set("status", String(status));
    if (limit !== undefined) query.set("limit", String(limit));
    if (offset !== undefined) query.set("offset", String(offset));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1AfterServicesJourneysJourneyId(journey_id: string | number): Promise<unknown> {
    let path = `/api/v1/after-services/journeys/${String(journey_id)}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1ApiKeys(): Promise<unknown> {
    let path = `/api/v1/api-keys`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1Approvals(status?: string | number | boolean, limit?: string | number | boolean, offset?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/approvals`;
    const query = new URLSearchParams();
    if (status !== undefined) query.set("status", String(status));
    if (limit !== undefined) query.set("limit", String(limit));
    if (offset !== undefined) query.set("offset", String(offset));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1ApprovalsApprovalPatterns(): Promise<unknown> {
    let path = `/api/v1/approvals/approval-patterns`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1ApprovalsTimeline(limit?: string | number | boolean, offset?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/approvals/timeline`;
    const query = new URLSearchParams();
    if (limit !== undefined) query.set("limit", String(limit));
    if (offset !== undefined) query.set("offset", String(offset));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1AuthMe(): Promise<unknown> {
    let path = `/api/v1/auth/me`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1AutomationsInsights(days?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/automations/insights`;
    const query = new URLSearchParams();
    if (days !== undefined) query.set("days", String(days));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1AutomationsJobQueueStats(): Promise<unknown> {
    let path = `/api/v1/automations/job-queue-stats`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1AutomationsRules(active_only?: string | number | boolean, trigger_topic?: string | number | boolean, limit?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/automations/rules`;
    const query = new URLSearchParams();
    if (active_only !== undefined) query.set("active_only", String(active_only));
    if (trigger_topic !== undefined) query.set("trigger_topic", String(trigger_topic));
    if (limit !== undefined) query.set("limit", String(limit));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1AutomationsRulesExecutionsAll(limit?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/automations/rules/executions/all`;
    const query = new URLSearchParams();
    if (limit !== undefined) query.set("limit", String(limit));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1AutomationsRulesRuleId(rule_id: string | number): Promise<unknown> {
    let path = `/api/v1/automations/rules/${String(rule_id)}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1AutomationsRulesRuleIdExecutions(rule_id: string | number, limit?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/automations/rules/${String(rule_id)}/executions`;
    const query = new URLSearchParams();
    if (limit !== undefined) query.set("limit", String(limit));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1AutomationsTemplates(): Promise<unknown> {
    let path = `/api/v1/automations/templates`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1AutomationsTriggers(active_only?: string | number | boolean, limit?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/automations/triggers`;
    const query = new URLSearchParams();
    if (active_only !== undefined) query.set("active_only", String(active_only));
    if (limit !== undefined) query.set("limit", String(limit));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1AutomationsTriggersTriggerId(trigger_id: string | number): Promise<unknown> {
    let path = `/api/v1/automations/triggers/${String(trigger_id)}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1AutomationsWorkflowDefinitions(status?: string | number | boolean, limit?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/automations/workflow-definitions`;
    const query = new URLSearchParams();
    if (status !== undefined) query.set("status", String(status));
    if (limit !== undefined) query.set("limit", String(limit));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1AutomationsWorkflowDefinitionsWorkflowDefinitionId(workflow_definition_id: string | number): Promise<unknown> {
    let path = `/api/v1/automations/workflow-definitions/${String(workflow_definition_id)}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1AutomationsWorkflowRuns(status?: string | number | boolean, limit?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/automations/workflow-runs`;
    const query = new URLSearchParams();
    if (status !== undefined) query.set("status", String(status));
    if (limit !== undefined) query.set("limit", String(limit));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1AutomationsWorkflowRunsWorkflowRunId(workflow_run_id: string | number): Promise<unknown> {
    let path = `/api/v1/automations/workflow-runs/${String(workflow_run_id)}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1AutomationsWorkflows(status?: string | number | boolean, limit?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/automations/workflows`;
    const query = new URLSearchParams();
    if (status !== undefined) query.set("status", String(status));
    if (limit !== undefined) query.set("limit", String(limit));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1AutomationsWorkflowsWorkflowId(workflow_id: string | number): Promise<unknown> {
    let path = `/api/v1/automations/workflows/${String(workflow_id)}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1Campaigns(status?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/campaigns`;
    const query = new URLSearchParams();
    if (status !== undefined) query.set("status", String(status));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1CampaignsCampaignId(campaign_id: string | number): Promise<unknown> {
    let path = `/api/v1/campaigns/${String(campaign_id)}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1CampaignsCampaignIdAbTest(campaign_id: string | number): Promise<unknown> {
    let path = `/api/v1/campaigns/${String(campaign_id)}/ab-test`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1CampaignsCampaignIdAnalytics(campaign_id: string | number): Promise<unknown> {
    let path = `/api/v1/campaigns/${String(campaign_id)}/analytics`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1CampaignsCampaignIdEnrollments(campaign_id: string | number, status?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/campaigns/${String(campaign_id)}/enrollments`;
    const query = new URLSearchParams();
    if (status !== undefined) query.set("status", String(status));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1CampaignsCampaignIdSteps(campaign_id: string | number): Promise<unknown> {
    let path = `/api/v1/campaigns/${String(campaign_id)}/steps`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1CampaignsCampaignIdSummary(campaign_id: string | number): Promise<unknown> {
    let path = `/api/v1/campaigns/${String(campaign_id)}/summary`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1CampaignsCampaignIdVariantStats(campaign_id: string | number): Promise<unknown> {
    let path = `/api/v1/campaigns/${String(campaign_id)}/variant-stats`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1Contacts(limit?: string | number | boolean, offset?: string | number | boolean, pipeline_stage?: string | number | boolean, lead_score_min?: string | number | boolean, lead_score_max?: string | number | boolean, relationship?: string | number | boolean, search?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/contacts`;
    const query = new URLSearchParams();
    if (limit !== undefined) query.set("limit", String(limit));
    if (offset !== undefined) query.set("offset", String(offset));
    if (pipeline_stage !== undefined) query.set("pipeline_stage", String(pipeline_stage));
    if (lead_score_min !== undefined) query.set("lead_score_min", String(lead_score_min));
    if (lead_score_max !== undefined) query.set("lead_score_max", String(lead_score_max));
    if (relationship !== undefined) query.set("relationship", String(relationship));
    if (search !== undefined) query.set("search", String(search));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1ContactsContactId(contact_id: string | number): Promise<unknown> {
    let path = `/api/v1/contacts/${String(contact_id)}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1ContactsContactIdMergeHistory(contact_id: string | number, limit?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/contacts/${String(contact_id)}/merge-history`;
    const query = new URLSearchParams();
    if (limit !== undefined) query.set("limit", String(limit));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1ContactsContactIdNetwork(contact_id: string | number, limit?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/contacts/${String(contact_id)}/network`;
    const query = new URLSearchParams();
    if (limit !== undefined) query.set("limit", String(limit));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1ContactsContactIdTimeline(contact_id: string | number, limit?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/contacts/${String(contact_id)}/timeline`;
    const query = new URLSearchParams();
    if (limit !== undefined) query.set("limit", String(limit));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1ContactsDuplicates(limit?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/contacts/duplicates`;
    const query = new URLSearchParams();
    if (limit !== undefined) query.set("limit", String(limit));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1ContactsFollowUpDue(limit?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/contacts/follow-up-due`;
    const query = new URLSearchParams();
    if (limit !== undefined) query.set("limit", String(limit));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1ContactsIntelligence(stale_days?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/contacts/intelligence`;
    const query = new URLSearchParams();
    if (stale_days !== undefined) query.set("stale_days", String(stale_days));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1ContactsPipelineAnalytics(): Promise<unknown> {
    let path = `/api/v1/contacts/pipeline-analytics`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1ContactsPipelineSummary(): Promise<unknown> {
    let path = `/api/v1/contacts/pipeline-summary`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1Deals(contact_id?: string | number | boolean, stage?: string | number | boolean, limit?: string | number | boolean, offset?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/deals`;
    const query = new URLSearchParams();
    if (contact_id !== undefined) query.set("contact_id", String(contact_id));
    if (stage !== undefined) query.set("stage", String(stage));
    if (limit !== undefined) query.set("limit", String(limit));
    if (offset !== undefined) query.set("offset", String(offset));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1DealsDealId(deal_id: string | number): Promise<unknown> {
    let path = `/api/v1/deals/${String(deal_id)}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1DealsForecast(months?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/deals/forecast`;
    const query = new URLSearchParams();
    if (months !== undefined) query.set("months", String(months));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1DealsForecastPipeline(): Promise<unknown> {
    let path = `/api/v1/deals/forecast/pipeline`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1DealsForecastWinRates(months?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/deals/forecast/win-rates`;
    const query = new URLSearchParams();
    if (months !== undefined) query.set("months", String(months));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1DealsRequirements(stage?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/deals/requirements`;
    const query = new URLSearchParams();
    if (stage !== undefined) query.set("stage", String(stage));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1DealsRequirementsChecklistDealIdStage(deal_id: string | number, stage: string | number): Promise<unknown> {
    let path = `/api/v1/deals/requirements/checklist/${String(deal_id)}/${String(stage)}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1DealsRequirementsValidateDealIdStage(deal_id: string | number, stage: string | number): Promise<unknown> {
    let path = `/api/v1/deals/requirements/validate/${String(deal_id)}/${String(stage)}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1DealsSummary(): Promise<unknown> {
    let path = `/api/v1/deals/summary`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1EgpnAdminAgreements(skip?: string | number | boolean, limit?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/egpn/admin/agreements`;
    const query = new URLSearchParams();
    if (skip !== undefined) query.set("skip", String(skip));
    if (limit !== undefined) query.set("limit", String(limit));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1EgpnAdminAnalyticsNetwork(): Promise<unknown> {
    let path = `/api/v1/egpn/admin/analytics/network`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1EgpnAdminApplications(skip?: string | number | boolean, limit?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/egpn/admin/applications`;
    const query = new URLSearchParams();
    if (skip !== undefined) query.set("skip", String(skip));
    if (limit !== undefined) query.set("limit", String(limit));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1EgpnAdminCommissions(partner_id?: string | number | boolean, status?: string | number | boolean, limit?: string | number | boolean, offset?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/egpn/admin/commissions`;
    const query = new URLSearchParams();
    if (partner_id !== undefined) query.set("partner_id", String(partner_id));
    if (status !== undefined) query.set("status", String(status));
    if (limit !== undefined) query.set("limit", String(limit));
    if (offset !== undefined) query.set("offset", String(offset));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1EgpnAdminCommissionsCommissionId(commission_id: string | number): Promise<unknown> {
    let path = `/api/v1/egpn/admin/commissions/${String(commission_id)}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1EgpnAdminCommissionsSummary(partner_id?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/egpn/admin/commissions/summary`;
    const query = new URLSearchParams();
    if (partner_id !== undefined) query.set("partner_id", String(partner_id));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1EgpnAdminInviteTokens(skip?: string | number | boolean, limit?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/egpn/admin/invite-tokens`;
    const query = new URLSearchParams();
    if (skip !== undefined) query.set("skip", String(skip));
    if (limit !== undefined) query.set("limit", String(limit));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1EgpnAdminOpportunities(skip?: string | number | boolean, limit?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/egpn/admin/opportunities`;
    const query = new URLSearchParams();
    if (skip !== undefined) query.set("skip", String(skip));
    if (limit !== undefined) query.set("limit", String(limit));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1EgpnAdminOpportunitiesOppIdRecommendedPartners(opp_id: string | number): Promise<unknown> {
    let path = `/api/v1/egpn/admin/opportunities/${String(opp_id)}/recommended-partners`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1EgpnAdminPartners(skip?: string | number | boolean, limit?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/egpn/admin/partners`;
    const query = new URLSearchParams();
    if (skip !== undefined) query.set("skip", String(skip));
    if (limit !== undefined) query.set("limit", String(limit));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1EgpnAdminPartnersPartnerId(partner_id: string | number): Promise<unknown> {
    let path = `/api/v1/egpn/admin/partners/${String(partner_id)}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1EgpnAdminPartnersPartnerIdAgreements(partner_id: string | number, skip?: string | number | boolean, limit?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/egpn/admin/partners/${String(partner_id)}/agreements`;
    const query = new URLSearchParams();
    if (skip !== undefined) query.set("skip", String(skip));
    if (limit !== undefined) query.set("limit", String(limit));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1EgpnAdminPartnersPartnerIdAnalytics(partner_id: string | number): Promise<unknown> {
    let path = `/api/v1/egpn/admin/partners/${String(partner_id)}/analytics`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1EgpnAdminPartnersPartnerIdDocuments(partner_id: string | number, skip?: string | number | boolean, limit?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/egpn/admin/partners/${String(partner_id)}/documents`;
    const query = new URLSearchParams();
    if (skip !== undefined) query.set("skip", String(skip));
    if (limit !== undefined) query.set("limit", String(limit));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1EgpnAdminStudentApplications(skip?: string | number | boolean, limit?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/egpn/admin/student-applications`;
    const query = new URLSearchParams();
    if (skip !== undefined) query.set("skip", String(skip));
    if (limit !== undefined) query.set("limit", String(limit));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1EgpnAdminStudents(skip?: string | number | boolean, limit?: string | number | boolean, partner_id?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/egpn/admin/students`;
    const query = new URLSearchParams();
    if (skip !== undefined) query.set("skip", String(skip));
    if (limit !== undefined) query.set("limit", String(limit));
    if (partner_id !== undefined) query.set("partner_id", String(partner_id));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1EgpnAdminStudentsStudentId(student_id: string | number): Promise<unknown> {
    let path = `/api/v1/egpn/admin/students/${String(student_id)}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1EgpnAdminStudentsStudentIdApplications(student_id: string | number, skip?: string | number | boolean, limit?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/egpn/admin/students/${String(student_id)}/applications`;
    const query = new URLSearchParams();
    if (skip !== undefined) query.set("skip", String(skip));
    if (limit !== undefined) query.set("limit", String(limit));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1EgpnPartnersAgreements(skip?: string | number | boolean, limit?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/egpn/partners/agreements`;
    const query = new URLSearchParams();
    if (skip !== undefined) query.set("skip", String(skip));
    if (limit !== undefined) query.set("limit", String(limit));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1EgpnPartnersAgreementsAgreementId(agreement_id: string | number): Promise<unknown> {
    let path = `/api/v1/egpn/partners/agreements/${String(agreement_id)}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1EgpnPartnersCommissions(status?: string | number | boolean, limit?: string | number | boolean, offset?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/egpn/partners/commissions`;
    const query = new URLSearchParams();
    if (status !== undefined) query.set("status", String(status));
    if (limit !== undefined) query.set("limit", String(limit));
    if (offset !== undefined) query.set("offset", String(offset));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1EgpnPartnersCommissionsCommissionId(commission_id: string | number): Promise<unknown> {
    let path = `/api/v1/egpn/partners/commissions/${String(commission_id)}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1EgpnPartnersCommissionsSummary(): Promise<unknown> {
    let path = `/api/v1/egpn/partners/commissions/summary`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1EgpnPartnersDocuments(skip?: string | number | boolean, limit?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/egpn/partners/documents`;
    const query = new URLSearchParams();
    if (skip !== undefined) query.set("skip", String(skip));
    if (limit !== undefined) query.set("limit", String(limit));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1EgpnPartnersOpportunities(skip?: string | number | boolean, limit?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/egpn/partners/opportunities`;
    const query = new URLSearchParams();
    if (skip !== undefined) query.set("skip", String(skip));
    if (limit !== undefined) query.set("limit", String(limit));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1EgpnPartnersOpportunitiesOppId(opp_id: string | number): Promise<unknown> {
    let path = `/api/v1/egpn/partners/opportunities/${String(opp_id)}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1EgpnPartnersOpportunitiesRecommended(): Promise<unknown> {
    let path = `/api/v1/egpn/partners/opportunities/recommended`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1EgpnPartnersPartnerIdAgreementPdf(partner_id: string | number): Promise<unknown> {
    let path = `/api/v1/egpn/partners/${String(partner_id)}/agreement-pdf`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1EgpnPartnersProfile(): Promise<unknown> {
    let path = `/api/v1/egpn/partners/profile`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1EgpnPartnersStats(): Promise<unknown> {
    let path = `/api/v1/egpn/partners/stats`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1EgpnPartnersStudents(skip?: string | number | boolean, limit?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/egpn/partners/students`;
    const query = new URLSearchParams();
    if (skip !== undefined) query.set("skip", String(skip));
    if (limit !== undefined) query.set("limit", String(limit));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1EgpnPartnersStudentsStudentId(student_id: string | number): Promise<unknown> {
    let path = `/api/v1/egpn/partners/students/${String(student_id)}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1EgpnPartnersTeam(skip?: string | number | boolean, limit?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/egpn/partners/team`;
    const query = new URLSearchParams();
    if (skip !== undefined) query.set("skip", String(skip));
    if (limit !== undefined) query.set("limit", String(limit));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1EgpnPortalStats(): Promise<unknown> {
    let path = `/api/v1/egpn/portal/stats`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1EmpireDigitalAnalyticsAbTestCampaignId(campaign_id: string | number): Promise<unknown> {
    let path = `/api/v1/empire-digital-analytics/ab-test/${String(campaign_id)}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1EmpireDigitalAnalyticsCampaigns(limit?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/empire-digital-analytics/campaigns`;
    const query = new URLSearchParams();
    if (limit !== undefined) query.set("limit", String(limit));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1EmpireDigitalAnalyticsDailyTrends(days?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/empire-digital-analytics/daily-trends`;
    const query = new URLSearchParams();
    if (days !== undefined) query.set("days", String(days));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1EmpireDigitalAnalyticsFunnelCampaignId(campaign_id: string | number): Promise<unknown> {
    let path = `/api/v1/empire-digital-analytics/funnel/${String(campaign_id)}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1EmpireDigitalCockpit(): Promise<unknown> {
    let path = `/api/v1/empire-digital/cockpit`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1EmpireDigitalFounderReport(window_days?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/empire-digital/founder-report`;
    const query = new URLSearchParams();
    if (window_days !== undefined) query.set("window_days", String(window_days));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1EmpireDigitalIntelligence(status?: string | number | boolean, limit?: string | number | boolean, offset?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/empire-digital/intelligence`;
    const query = new URLSearchParams();
    if (status !== undefined) query.set("status", String(status));
    if (limit !== undefined) query.set("limit", String(limit));
    if (offset !== undefined) query.set("offset", String(offset));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1EmpireDigitalLeads(limit?: string | number | boolean, offset?: string | number | boolean, lead_type?: string | number | boolean, routing_status?: string | number | boolean, search?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/empire-digital/leads`;
    const query = new URLSearchParams();
    if (limit !== undefined) query.set("limit", String(limit));
    if (offset !== undefined) query.set("offset", String(offset));
    if (lead_type !== undefined) query.set("lead_type", String(lead_type));
    if (routing_status !== undefined) query.set("routing_status", String(routing_status));
    if (search !== undefined) query.set("search", String(search));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1EmpireDigitalLeadsContactId(contact_id: string | number): Promise<unknown> {
    let path = `/api/v1/empire-digital/leads/${String(contact_id)}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1EmpireDigitalLeadsExport(format?: string | number | boolean, limit?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/empire-digital/leads/export`;
    const query = new URLSearchParams();
    if (format !== undefined) query.set("format", String(format));
    if (limit !== undefined) query.set("limit", String(limit));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1EmpireDigitalRoutingRules(active_only?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/empire-digital/routing-rules`;
    const query = new URLSearchParams();
    if (active_only !== undefined) query.set("active_only", String(active_only));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1EmpireDigitalScorecard(window_days?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/empire-digital/scorecard`;
    const query = new URLSearchParams();
    if (window_days !== undefined) query.set("window_days", String(window_days));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1EmpireDigitalSlaPolicy(): Promise<unknown> {
    let path = `/api/v1/empire-digital/sla-policy`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1EmpireDigitalSocialMediaPages(platform?: string | number | boolean, company_id?: string | number | boolean, is_active?: string | number | boolean, limit?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/empire-digital/social-media/pages`;
    const query = new URLSearchParams();
    if (platform !== undefined) query.set("platform", String(platform));
    if (company_id !== undefined) query.set("company_id", String(company_id));
    if (is_active !== undefined) query.set("is_active", String(is_active));
    if (limit !== undefined) query.set("limit", String(limit));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1EmpireDigitalSocialMediaPagesPageId(page_id: string | number): Promise<unknown> {
    let path = `/api/v1/empire-digital/social-media/pages/${String(page_id)}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1EmpireDigitalSocialMediaPagesPageIdAnalytics(page_id: string | number, limit?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/empire-digital/social-media/pages/${String(page_id)}/analytics`;
    const query = new URLSearchParams();
    if (limit !== undefined) query.set("limit", String(limit));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1EmpireDigitalSocialMediaPagesPageIdAnalyticsGrowth(page_id: string | number): Promise<unknown> {
    let path = `/api/v1/empire-digital/social-media/pages/${String(page_id)}/analytics/growth`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1EmpireDigitalSocialMediaPagesPageIdCredentials(page_id: string | number): Promise<unknown> {
    let path = `/api/v1/empire-digital/social-media/pages/${String(page_id)}/credentials`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1EmpireDigitalSocialMediaPagesSummary(): Promise<unknown> {
    let path = `/api/v1/empire-digital/social-media/pages/summary`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1HousingBookingsMy(): Promise<unknown> {
    let path = `/api/v1/housing/bookings/my`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1HousingListings(city?: string | number | boolean, price_min?: string | number | boolean, price_max?: string | number | boolean, type?: string | number | boolean, page?: string | number | boolean, limit?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/housing/listings`;
    const query = new URLSearchParams();
    if (city !== undefined) query.set("city", String(city));
    if (price_min !== undefined) query.set("price_min", String(price_min));
    if (price_max !== undefined) query.set("price_max", String(price_max));
    if (type !== undefined) query.set("type", String(type));
    if (page !== undefined) query.set("page", String(page));
    if (limit !== undefined) query.set("limit", String(limit));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1HousingListingsListingId(listing_id: string | number): Promise<unknown> {
    let path = `/api/v1/housing/listings/${String(listing_id)}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1LearningCertificatesAdmin(limit?: string | number | boolean, offset?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/learning/certificates/admin`;
    const query = new URLSearchParams();
    if (limit !== undefined) query.set("limit", String(limit));
    if (offset !== undefined) query.set("offset", String(offset));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1LearningCertificatesCertificateId(certificate_id: string | number): Promise<unknown> {
    let path = `/api/v1/learning/certificates/${String(certificate_id)}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1LearningCertificatesMe(): Promise<unknown> {
    let path = `/api/v1/learning/certificates/me`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1LearningCompanyCompanyIdCourses(company_id: string | number): Promise<unknown> {
    let path = `/api/v1/learning/company/${String(company_id)}/courses`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1LearningCourses(category?: string | number | boolean, level?: string | number | boolean, visibility?: string | number | boolean, target_audience?: string | number | boolean, provider?: string | number | boolean, published_only?: string | number | boolean, limit?: string | number | boolean, offset?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/learning/courses`;
    const query = new URLSearchParams();
    if (category !== undefined) query.set("category", String(category));
    if (level !== undefined) query.set("level", String(level));
    if (visibility !== undefined) query.set("visibility", String(visibility));
    if (target_audience !== undefined) query.set("target_audience", String(target_audience));
    if (provider !== undefined) query.set("provider", String(provider));
    if (published_only !== undefined) query.set("published_only", String(published_only));
    if (limit !== undefined) query.set("limit", String(limit));
    if (offset !== undefined) query.set("offset", String(offset));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1LearningCoursesCourseId(course_id: string | number): Promise<unknown> {
    let path = `/api/v1/learning/courses/${String(course_id)}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1LearningCoursesCourseIdEffectiveness(course_id: string | number): Promise<unknown> {
    let path = `/api/v1/learning/courses/${String(course_id)}/effectiveness`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1LearningCoursesCourseIdLessons(course_id: string | number): Promise<unknown> {
    let path = `/api/v1/learning/courses/${String(course_id)}/lessons`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1LearningCoursesCourseIdLessonsLessonId(course_id: string | number, lesson_id: string | number): Promise<unknown> {
    let path = `/api/v1/learning/courses/${String(course_id)}/lessons/${String(lesson_id)}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1LearningCoursesCourseIdQuiz(course_id: string | number): Promise<unknown> {
    let path = `/api/v1/learning/courses/${String(course_id)}/quiz`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1LearningCoursesCourseIdStats(course_id: string | number): Promise<unknown> {
    let path = `/api/v1/learning/courses/${String(course_id)}/stats`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1LearningEffectiveness(days?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/learning/effectiveness`;
    const query = new URLSearchParams();
    if (days !== undefined) query.set("days", String(days));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1LearningEnrollments(user_id?: string | number | boolean, course_id?: string | number | boolean, limit?: string | number | boolean, offset?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/learning/enrollments`;
    const query = new URLSearchParams();
    if (user_id !== undefined) query.set("user_id", String(user_id));
    if (course_id !== undefined) query.set("course_id", String(course_id));
    if (limit !== undefined) query.set("limit", String(limit));
    if (offset !== undefined) query.set("offset", String(offset));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1LearningGtpExport(): Promise<unknown> {
    let path = `/api/v1/learning/gtp/export`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1LearningGtpMe(): Promise<unknown> {
    let path = `/api/v1/learning/gtp/me`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1LearningGtpPrograms(): Promise<unknown> {
    let path = `/api/v1/learning/gtp/programs`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1LearningInsights(days?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/learning/insights`;
    const query = new URLSearchParams();
    if (days !== undefined) query.set("days", String(days));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1LearningInterviewHistory(limit?: string | number | boolean, offset?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/learning/interview/history`;
    const query = new URLSearchParams();
    if (limit !== undefined) query.set("limit", String(limit));
    if (offset !== undefined) query.set("offset", String(offset));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1LearningInterviewSessionId(session_id: string | number): Promise<unknown> {
    let path = `/api/v1/learning/interview/${String(session_id)}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1LearningInterviewSessionIdReport(session_id: string | number): Promise<unknown> {
    let path = `/api/v1/learning/interview/${String(session_id)}/report`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1LearningMyAssignments(): Promise<unknown> {
    let path = `/api/v1/learning/my-assignments`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1LearningQuizzesQuizIdQuestions(quiz_id: string | number): Promise<unknown> {
    let path = `/api/v1/learning/quizzes/${String(quiz_id)}/questions`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1LearningRuns(limit?: string | number | boolean, offset?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/learning/runs`;
    const query = new URLSearchParams();
    if (limit !== undefined) query.set("limit", String(limit));
    if (offset !== undefined) query.set("offset", String(offset));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1LearningSignals(lookback_days?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/learning/signals`;
    const query = new URLSearchParams();
    if (lookback_days !== undefined) query.set("lookback_days", String(lookback_days));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1LearningTutorSessions(): Promise<unknown> {
    let path = `/api/v1/learning/tutor/sessions`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1LearningTutorSessionsSessionIdMessages(session_id: string | number): Promise<unknown> {
    let path = `/api/v1/learning/tutor/sessions/${String(session_id)}/messages`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1Orgs(): Promise<unknown> {
    let path = `/api/v1/orgs`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1OrgsOrgIdFeatureFlags(org_id: string | number): Promise<unknown> {
    let path = `/api/v1/orgs/${String(org_id)}/feature-flags`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1OrgsOrgIdMembers(org_id: string | number): Promise<unknown> {
    let path = `/api/v1/orgs/${String(org_id)}/members`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1RecruitmentAnalyticsFunnel(days?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/recruitment/analytics/funnel`;
    const query = new URLSearchParams();
    if (days !== undefined) query.set("days", String(days));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1RecruitmentAnalyticsPlacementRate(days?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/recruitment/analytics/placement-rate`;
    const query = new URLSearchParams();
    if (days !== undefined) query.set("days", String(days));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1RecruitmentAnalyticsRecruiterProductivity(days?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/recruitment/analytics/recruiter-productivity`;
    const query = new URLSearchParams();
    if (days !== undefined) query.set("days", String(days));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1RecruitmentAnalyticsSlaCompliance(): Promise<unknown> {
    let path = `/api/v1/recruitment/analytics/sla-compliance`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1RecruitmentAnalyticsTimeToPlacement(days?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/recruitment/analytics/time-to-placement`;
    const query = new URLSearchParams();
    if (days !== undefined) query.set("days", String(days));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1RecruitmentCandidateDocuments(candidate_id?: string | number | boolean, contact_id?: string | number | boolean, document_type?: string | number | boolean, stage?: string | number | boolean, limit?: string | number | boolean, offset?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/recruitment/candidate-documents`;
    const query = new URLSearchParams();
    if (candidate_id !== undefined) query.set("candidate_id", String(candidate_id));
    if (contact_id !== undefined) query.set("contact_id", String(contact_id));
    if (document_type !== undefined) query.set("document_type", String(document_type));
    if (stage !== undefined) query.set("stage", String(stage));
    if (limit !== undefined) query.set("limit", String(limit));
    if (offset !== undefined) query.set("offset", String(offset));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1RecruitmentCandidateDocumentsDocumentId(document_id: string | number): Promise<unknown> {
    let path = `/api/v1/recruitment/candidate-documents/${String(document_id)}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1RecruitmentConversion(): Promise<unknown> {
    let path = `/api/v1/recruitment/conversion`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1RecruitmentOpenings(limit?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/recruitment/openings`;
    const query = new URLSearchParams();
    if (limit !== undefined) query.set("limit", String(limit));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1RecruitmentPipeline(): Promise<unknown> {
    let path = `/api/v1/recruitment/pipeline`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1RecruitmentTimeToHire(): Promise<unknown> {
    let path = `/api/v1/recruitment/time-to-hire`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1SettlementProgram(): Promise<unknown> {
    let path = `/api/v1/settlement/program`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1SettlementTasks(): Promise<unknown> {
    let path = `/api/v1/settlement/tasks`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1SettlementTasksTaskId(task_id: string | number): Promise<unknown> {
    let path = `/api/v1/settlement/tasks/${String(task_id)}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1Tasks(project_id?: string | number | boolean, category?: string | number | boolean, is_done?: string | number | boolean, assigned_to_user_id?: string | number | boolean, limit?: string | number | boolean, offset?: string | number | boolean, workspace_id?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/tasks`;
    const query = new URLSearchParams();
    if (project_id !== undefined) query.set("project_id", String(project_id));
    if (category !== undefined) query.set("category", String(category));
    if (is_done !== undefined) query.set("is_done", String(is_done));
    if (assigned_to_user_id !== undefined) query.set("assigned_to_user_id", String(assigned_to_user_id));
    if (limit !== undefined) query.set("limit", String(limit));
    if (offset !== undefined) query.set("offset", String(offset));
    if (workspace_id !== undefined) query.set("workspace_id", String(workspace_id));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1TasksPrioritized(limit?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/tasks/prioritized`;
    const query = new URLSearchParams();
    if (limit !== undefined) query.set("limit", String(limit));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1TasksTemplates(active_only?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/tasks/templates`;
    const query = new URLSearchParams();
    if (active_only !== undefined) query.set("active_only", String(active_only));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1Webhooks(limit?: string | number | boolean, offset?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/webhooks`;
    const query = new URLSearchParams();
    if (limit !== undefined) query.set("limit", String(limit));
    if (offset !== undefined) query.set("offset", String(offset));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1WebhooksDeliveriesAll(event?: string | number | boolean, status?: string | number | boolean, limit?: string | number | boolean, offset?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/webhooks/deliveries/all`;
    const query = new URLSearchParams();
    if (event !== undefined) query.set("event", String(event));
    if (status !== undefined) query.set("status", String(status));
    if (limit !== undefined) query.set("limit", String(limit));
    if (offset !== undefined) query.set("offset", String(offset));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1WebhooksDeliveriesDeadLetter(limit?: string | number | boolean, offset?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/webhooks/deliveries/dead-letter`;
    const query = new URLSearchParams();
    if (limit !== undefined) query.set("limit", String(limit));
    if (offset !== undefined) query.set("offset", String(offset));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1WebhooksEndpointId(endpoint_id: string | number): Promise<unknown> {
    let path = `/api/v1/webhooks/${String(endpoint_id)}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  getApiV1WebhooksEndpointIdDeliveries(endpoint_id: string | number, limit?: string | number | boolean, offset?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/webhooks/${String(endpoint_id)}/deliveries`;
    const query = new URLSearchParams();
    if (limit !== undefined) query.set("limit", String(limit));
    if (offset !== undefined) query.set("offset", String(offset));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("GET", path, {
      expectedStatus: [200],
    });
  }

  patchApiV1AfterServicesJourneysJourneyIdStatus(journey_id: string | number, payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/after-services/journeys/${String(journey_id)}/status`;
    return this.request<unknown>("PATCH", path, {
      body: payload,
      expectedStatus: [200],
    });
  }

  patchApiV1ApprovalsApprovalPatternsPatternId(pattern_id: string | number, payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/approvals/approval-patterns/${String(pattern_id)}`;
    return this.request<unknown>("PATCH", path, {
      body: payload,
      expectedStatus: [200],
    });
  }

  patchApiV1AutomationsRulesRuleId(rule_id: string | number, payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/automations/rules/${String(rule_id)}`;
    return this.request<unknown>("PATCH", path, {
      body: payload,
      expectedStatus: [200],
    });
  }

  patchApiV1AutomationsTriggersTriggerId(trigger_id: string | number, payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/automations/triggers/${String(trigger_id)}`;
    return this.request<unknown>("PATCH", path, {
      body: payload,
      expectedStatus: [200],
    });
  }

  patchApiV1AutomationsWorkflowDefinitionsWorkflowDefinitionId(workflow_definition_id: string | number, payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/automations/workflow-definitions/${String(workflow_definition_id)}`;
    return this.request<unknown>("PATCH", path, {
      body: payload,
      expectedStatus: [200],
    });
  }

  patchApiV1CampaignsCampaignIdStatus(campaign_id: string | number, payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/campaigns/${String(campaign_id)}/status`;
    return this.request<unknown>("PATCH", path, {
      body: payload,
      expectedStatus: [200],
    });
  }

  patchApiV1ContactsContactId(contact_id: string | number, payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/contacts/${String(contact_id)}`;
    return this.request<unknown>("PATCH", path, {
      body: payload,
      expectedStatus: [200],
    });
  }

  patchApiV1DealsDealId(deal_id: string | number, payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/deals/${String(deal_id)}`;
    return this.request<unknown>("PATCH", path, {
      body: payload,
      expectedStatus: [200],
    });
  }

  patchApiV1EgpnAdminAgreementsAgreementId(agreement_id: string | number, payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/egpn/admin/agreements/${String(agreement_id)}`;
    return this.request<unknown>("PATCH", path, {
      body: payload,
      expectedStatus: [200],
    });
  }

  patchApiV1EgpnAdminApplicationsAppIdStatus(app_id: string | number, payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/egpn/admin/applications/${String(app_id)}/status`;
    return this.request<unknown>("PATCH", path, {
      body: payload,
      expectedStatus: [200],
    });
  }

  patchApiV1EgpnAdminCommissionsCommissionId(commission_id: string | number, payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/egpn/admin/commissions/${String(commission_id)}`;
    return this.request<unknown>("PATCH", path, {
      body: payload,
      expectedStatus: [200],
    });
  }

  patchApiV1EgpnAdminCommissionsCommissionIdStatus(commission_id: string | number, payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/egpn/admin/commissions/${String(commission_id)}/status`;
    return this.request<unknown>("PATCH", path, {
      body: payload,
      expectedStatus: [200],
    });
  }

  patchApiV1EgpnAdminPartnersPartnerId(partner_id: string | number, payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/egpn/admin/partners/${String(partner_id)}`;
    return this.request<unknown>("PATCH", path, {
      body: payload,
      expectedStatus: [200],
    });
  }

  patchApiV1EgpnAdminPartnersPartnerIdDocumentsDocIdReject(partner_id: string | number, doc_id: string | number, payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/egpn/admin/partners/${String(partner_id)}/documents/${String(doc_id)}/reject`;
    return this.request<unknown>("PATCH", path, {
      body: payload,
      expectedStatus: [200],
    });
  }

  patchApiV1EgpnAdminPartnersPartnerIdDocumentsDocIdVerify(partner_id: string | number, doc_id: string | number): Promise<unknown> {
    let path = `/api/v1/egpn/admin/partners/${String(partner_id)}/documents/${String(doc_id)}/verify`;
    return this.request<unknown>("PATCH", path, {
      expectedStatus: [200],
    });
  }

  patchApiV1EgpnAdminPartnersPartnerIdStatus(partner_id: string | number, payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/egpn/admin/partners/${String(partner_id)}/status`;
    return this.request<unknown>("PATCH", path, {
      body: payload,
      expectedStatus: [200],
    });
  }

  patchApiV1EgpnAdminStudentApplicationsAppIdStatus(app_id: string | number, payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/egpn/admin/student-applications/${String(app_id)}/status`;
    return this.request<unknown>("PATCH", path, {
      body: payload,
      expectedStatus: [200],
    });
  }

  patchApiV1EgpnAdminStudentsStudentIdStage(student_id: string | number, payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/egpn/admin/students/${String(student_id)}/stage`;
    return this.request<unknown>("PATCH", path, {
      body: payload,
      expectedStatus: [200],
    });
  }

  patchApiV1EmpireDigitalRoutingRulesRuleId(rule_id: string | number, payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/empire-digital/routing-rules/${String(rule_id)}`;
    return this.request<unknown>("PATCH", path, {
      body: payload,
      expectedStatus: [200],
    });
  }

  patchApiV1EmpireDigitalSlaPolicy(payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/empire-digital/sla-policy`;
    return this.request<unknown>("PATCH", path, {
      body: payload,
      expectedStatus: [200],
    });
  }

  patchApiV1HousingBookingsBookingIdCancel(booking_id: string | number): Promise<unknown> {
    let path = `/api/v1/housing/bookings/${String(booking_id)}/cancel`;
    return this.request<unknown>("PATCH", path, {
      expectedStatus: [200],
    });
  }

  patchApiV1LearningCoursesCourseId(course_id: string | number, payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/learning/courses/${String(course_id)}`;
    return this.request<unknown>("PATCH", path, {
      body: payload,
      expectedStatus: [200],
    });
  }

  patchApiV1LearningCoursesCourseIdLessonsLessonId(course_id: string | number, lesson_id: string | number, payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/learning/courses/${String(course_id)}/lessons/${String(lesson_id)}`;
    return this.request<unknown>("PATCH", path, {
      body: payload,
      expectedStatus: [200],
    });
  }

  patchApiV1LearningEnrollmentsEnrollmentId(enrollment_id: string | number, payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/learning/enrollments/${String(enrollment_id)}`;
    return this.request<unknown>("PATCH", path, {
      body: payload,
      expectedStatus: [200],
    });
  }

  patchApiV1OrgsOrgId(org_id: string | number, payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/orgs/${String(org_id)}`;
    return this.request<unknown>("PATCH", path, {
      body: payload,
      expectedStatus: [200],
    });
  }

  patchApiV1OrgsOrgIdFeatureFlags(org_id: string | number, payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/orgs/${String(org_id)}/feature-flags`;
    return this.request<unknown>("PATCH", path, {
      body: payload,
      expectedStatus: [200],
    });
  }

  patchApiV1RecruitmentCandidateDocumentsDocumentId(document_id: string | number, payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/recruitment/candidate-documents/${String(document_id)}`;
    return this.request<unknown>("PATCH", path, {
      body: payload,
      expectedStatus: [200],
    });
  }

  patchApiV1SettlementTasksTaskIdComplete(task_id: string | number): Promise<unknown> {
    let path = `/api/v1/settlement/tasks/${String(task_id)}/complete`;
    return this.request<unknown>("PATCH", path, {
      expectedStatus: [200],
    });
  }

  patchApiV1TasksTaskId(task_id: string | number, payload?: Record<string, unknown>, workspace_id?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/tasks/${String(task_id)}`;
    const query = new URLSearchParams();
    if (workspace_id !== undefined) query.set("workspace_id", String(workspace_id));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("PATCH", path, {
      body: payload,
      expectedStatus: [200],
    });
  }

  patchApiV1TasksTemplatesTemplateId(template_id: string | number, payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/tasks/templates/${String(template_id)}`;
    return this.request<unknown>("PATCH", path, {
      body: payload,
      expectedStatus: [200],
    });
  }

  patchApiV1WebhooksEndpointId(endpoint_id: string | number, payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/webhooks/${String(endpoint_id)}`;
    return this.request<unknown>("PATCH", path, {
      body: payload,
      expectedStatus: [200],
    });
  }

  postApiV1AfterServicesJourneys(payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/after-services/journeys/`;
    return this.request<unknown>("POST", path, {
      body: payload,
      expectedStatus: [201],
    });
  }

  postApiV1ApiKeys(payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/api-keys`;
    return this.request<unknown>("POST", path, {
      body: payload,
      expectedStatus: [201],
    });
  }

  postApiV1ApprovalsApprovalIdApprove(approval_id: string | number, payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/approvals/${String(approval_id)}/approve`;
    return this.request<unknown>("POST", path, {
      body: payload,
      expectedStatus: [200],
    });
  }

  postApiV1ApprovalsApprovalIdReject(approval_id: string | number, payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/approvals/${String(approval_id)}/reject`;
    return this.request<unknown>("POST", path, {
      body: payload,
      expectedStatus: [200],
    });
  }

  postApiV1ApprovalsRequest(payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/approvals/request`;
    return this.request<unknown>("POST", path, {
      body: payload,
      expectedStatus: [201],
    });
  }

  postApiV1AutomationsCopilotPlan(payload?: Record<string, unknown>, workspace_id?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/automations/copilot/plan`;
    const query = new URLSearchParams();
    if (workspace_id !== undefined) query.set("workspace_id", String(workspace_id));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("POST", path, {
      body: payload,
      expectedStatus: [200],
    });
  }

  postApiV1AutomationsCopilotPlanAndSave(payload?: Record<string, unknown>, workspace_id?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/automations/copilot/plan-and-save`;
    const query = new URLSearchParams();
    if (workspace_id !== undefined) query.set("workspace_id", String(workspace_id));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("POST", path, {
      body: payload,
      expectedStatus: [200],
    });
  }

  postApiV1AutomationsRules(payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/automations/rules`;
    return this.request<unknown>("POST", path, {
      body: payload,
      expectedStatus: [201],
    });
  }

  postApiV1AutomationsRulesEvaluate(payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/automations/rules/evaluate`;
    return this.request<unknown>("POST", path, {
      body: payload,
      expectedStatus: [200],
    });
  }

  postApiV1AutomationsTemplatesTemplateIdCreate(template_id: string | number, workspace_id?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/automations/templates/${String(template_id)}/create`;
    const query = new URLSearchParams();
    if (workspace_id !== undefined) query.set("workspace_id", String(workspace_id));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("POST", path, {
      expectedStatus: [201],
    });
  }

  postApiV1AutomationsTriggers(payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/automations/triggers`;
    return this.request<unknown>("POST", path, {
      body: payload,
      expectedStatus: [201],
    });
  }

  postApiV1AutomationsWorkflowDefinitions(payload?: Record<string, unknown>, workspace_id?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/automations/workflow-definitions`;
    const query = new URLSearchParams();
    if (workspace_id !== undefined) query.set("workspace_id", String(workspace_id));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("POST", path, {
      body: payload,
      expectedStatus: [201],
    });
  }

  postApiV1AutomationsWorkflowDefinitionsWorkflowDefinitionIdPublish(workflow_definition_id: string | number): Promise<unknown> {
    let path = `/api/v1/automations/workflow-definitions/${String(workflow_definition_id)}/publish`;
    return this.request<unknown>("POST", path, {
      expectedStatus: [200],
    });
  }

  postApiV1AutomationsWorkflowDefinitionsWorkflowDefinitionIdRun(workflow_definition_id: string | number, payload?: Record<string, unknown>, workspace_id?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/automations/workflow-definitions/${String(workflow_definition_id)}/run`;
    const query = new URLSearchParams();
    if (workspace_id !== undefined) query.set("workspace_id", String(workspace_id));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("POST", path, {
      body: payload,
      expectedStatus: [200],
    });
  }

  postApiV1AutomationsWorkflowDefinitionsWorkflowDefinitionIdRunPreview(workflow_definition_id: string | number, payload?: Record<string, unknown>, workspace_id?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/automations/workflow-definitions/${String(workflow_definition_id)}/run-preview`;
    const query = new URLSearchParams();
    if (workspace_id !== undefined) query.set("workspace_id", String(workspace_id));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("POST", path, {
      body: payload,
      expectedStatus: [200],
    });
  }

  postApiV1AutomationsWorkflowRunsWorkflowRunIdPause(workflow_run_id: string | number): Promise<unknown> {
    let path = `/api/v1/automations/workflow-runs/${String(workflow_run_id)}/pause`;
    return this.request<unknown>("POST", path, {
      expectedStatus: [200],
    });
  }

  postApiV1AutomationsWorkflowRunsWorkflowRunIdResume(workflow_run_id: string | number): Promise<unknown> {
    let path = `/api/v1/automations/workflow-runs/${String(workflow_run_id)}/resume`;
    return this.request<unknown>("POST", path, {
      expectedStatus: [200],
    });
  }

  postApiV1AutomationsWorkflowRunsWorkflowRunIdRetry(workflow_run_id: string | number): Promise<unknown> {
    let path = `/api/v1/automations/workflow-runs/${String(workflow_run_id)}/retry`;
    return this.request<unknown>("POST", path, {
      expectedStatus: [200],
    });
  }

  postApiV1AutomationsWorkflows(payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/automations/workflows`;
    return this.request<unknown>("POST", path, {
      body: payload,
      expectedStatus: [201],
    });
  }

  postApiV1AutomationsWorkflowsWorkflowIdAdvance(workflow_id: string | number, payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/automations/workflows/${String(workflow_id)}/advance`;
    return this.request<unknown>("POST", path, {
      body: payload,
      expectedStatus: [200],
    });
  }

  postApiV1AutomationsWorkflowsWorkflowIdExecute(workflow_id: string | number, payload?: Record<string, unknown>, execution_mode?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/automations/workflows/${String(workflow_id)}/execute`;
    const query = new URLSearchParams();
    if (execution_mode !== undefined) query.set("execution_mode", String(execution_mode));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("POST", path, {
      body: payload,
      expectedStatus: [200],
    });
  }

  postApiV1AutomationsWorkflowsWorkflowIdResume(workflow_id: string | number, payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/automations/workflows/${String(workflow_id)}/resume`;
    return this.request<unknown>("POST", path, {
      body: payload,
      expectedStatus: [200],
    });
  }

  postApiV1AutomationsWorkflowsWorkflowIdRun(workflow_id: string | number): Promise<unknown> {
    let path = `/api/v1/automations/workflows/${String(workflow_id)}/run`;
    return this.request<unknown>("POST", path, {
      expectedStatus: [200],
    });
  }

  postApiV1AutomationsWorkflowsWorkflowIdStart(workflow_id: string | number): Promise<unknown> {
    let path = `/api/v1/automations/workflows/${String(workflow_id)}/start`;
    return this.request<unknown>("POST", path, {
      expectedStatus: [200],
    });
  }

  postApiV1Campaigns(payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/campaigns`;
    return this.request<unknown>("POST", path, {
      body: payload,
      expectedStatus: [201],
    });
  }

  postApiV1CampaignsCampaignIdEnroll(campaign_id: string | number, payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/campaigns/${String(campaign_id)}/enroll`;
    return this.request<unknown>("POST", path, {
      body: payload,
      expectedStatus: [201],
    });
  }

  postApiV1CampaignsCampaignIdEvents(campaign_id: string | number, payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/campaigns/${String(campaign_id)}/events`;
    return this.request<unknown>("POST", path, {
      body: payload,
      expectedStatus: [201],
    });
  }

  postApiV1CampaignsCampaignIdSteps(campaign_id: string | number, payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/campaigns/${String(campaign_id)}/steps`;
    return this.request<unknown>("POST", path, {
      body: payload,
      expectedStatus: [201],
    });
  }

  postApiV1CampaignsCampaignIdVariants(campaign_id: string | number, payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/campaigns/${String(campaign_id)}/variants`;
    return this.request<unknown>("POST", path, {
      body: payload,
      expectedStatus: [201],
    });
  }

  postApiV1CampaignsCampaignIdVariantsVariantIdEvents(campaign_id: string | number, variant_id: string | number, payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/campaigns/${String(campaign_id)}/variants/${String(variant_id)}/events`;
    return this.request<unknown>("POST", path, {
      body: payload,
      expectedStatus: [201],
    });
  }

  postApiV1Contacts(payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/contacts`;
    return this.request<unknown>("POST", path, {
      body: payload,
      expectedStatus: [201],
    });
  }

  postApiV1ContactsContactIdQualify(contact_id: string | number, payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/contacts/${String(contact_id)}/qualify`;
    return this.request<unknown>("POST", path, {
      body: payload,
      expectedStatus: [200],
    });
  }

  postApiV1ContactsContactIdRoute(contact_id: string | number, payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/contacts/${String(contact_id)}/route`;
    return this.request<unknown>("POST", path, {
      body: payload,
      expectedStatus: [200],
    });
  }

  postApiV1ContactsContactIdUnmerge(contact_id: string | number, merge_history_id?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/contacts/${String(contact_id)}/unmerge`;
    const query = new URLSearchParams();
    if (merge_history_id !== undefined) query.set("merge_history_id", String(merge_history_id));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("POST", path, {
      expectedStatus: [200],
    });
  }

  postApiV1ContactsContactsInquiry(payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/contacts/contacts/inquiry`;
    return this.request<unknown>("POST", path, {
      body: payload,
      expectedStatus: [201],
    });
  }

  postApiV1ContactsEnrich(): Promise<unknown> {
    let path = `/api/v1/contacts/enrich`;
    return this.request<unknown>("POST", path, {
      expectedStatus: [200],
    });
  }

  postApiV1ContactsIntelligenceRescore(): Promise<unknown> {
    let path = `/api/v1/contacts/intelligence/rescore`;
    return this.request<unknown>("POST", path, {
      expectedStatus: [200],
    });
  }

  postApiV1ContactsMerge(payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/contacts/merge`;
    return this.request<unknown>("POST", path, {
      body: payload,
      expectedStatus: [200],
    });
  }

  postApiV1Deals(payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/deals`;
    return this.request<unknown>("POST", path, {
      body: payload,
      expectedStatus: [201],
    });
  }

  postApiV1DealsRequirements(payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/deals/requirements`;
    return this.request<unknown>("POST", path, {
      body: payload,
      expectedStatus: [201],
    });
  }

  postApiV1DealsRequirementsReqIdCheckDealId(req_id: string | number, deal_id: string | number, payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/deals/requirements/${String(req_id)}/check/${String(deal_id)}`;
    return this.request<unknown>("POST", path, {
      body: payload,
      expectedStatus: [200],
    });
  }

  postApiV1EgpnAdminAgreements(payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/egpn/admin/agreements`;
    return this.request<unknown>("POST", path, {
      body: payload,
      expectedStatus: [201],
    });
  }

  postApiV1EgpnAdminCommissions(payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/egpn/admin/commissions`;
    return this.request<unknown>("POST", path, {
      body: payload,
      expectedStatus: [201],
    });
  }

  postApiV1EgpnAdminCommissionsBulkUpdate(payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/egpn/admin/commissions/bulk-update`;
    return this.request<unknown>("POST", path, {
      body: payload,
      expectedStatus: [200],
    });
  }

  postApiV1EgpnAdminInviteTokens(payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/egpn/admin/invite-tokens`;
    return this.request<unknown>("POST", path, {
      body: payload,
      expectedStatus: [201],
    });
  }

  postApiV1EgpnAdminOpportunities(payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/egpn/admin/opportunities`;
    return this.request<unknown>("POST", path, {
      body: payload,
      expectedStatus: [201],
    });
  }

  postApiV1EgpnAdminStudentApplications(payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/egpn/admin/student-applications`;
    return this.request<unknown>("POST", path, {
      body: payload,
      expectedStatus: [201],
    });
  }

  postApiV1EgpnAdminStudents(payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/egpn/admin/students`;
    return this.request<unknown>("POST", path, {
      body: payload,
      expectedStatus: [201],
    });
  }

  postApiV1EgpnInviteTokensConsume(payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/egpn/invite-tokens/consume`;
    return this.request<unknown>("POST", path, {
      body: payload,
      expectedStatus: [200],
    });
  }

  postApiV1EgpnPartnersAgreementsAgreementIdSign(agreement_id: string | number): Promise<unknown> {
    let path = `/api/v1/egpn/partners/agreements/${String(agreement_id)}/sign`;
    return this.request<unknown>("POST", path, {
      expectedStatus: [200],
    });
  }

  postApiV1EgpnPartnersCommissionsPayoutRequest(): Promise<unknown> {
    let path = `/api/v1/egpn/partners/commissions/payout-request`;
    return this.request<unknown>("POST", path, {
      expectedStatus: [200],
    });
  }

  postApiV1EgpnPartnersDocuments(payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/egpn/partners/documents`;
    return this.request<unknown>("POST", path, {
      body: payload,
      expectedStatus: [201],
    });
  }

  postApiV1EgpnPartnersLeads(payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/egpn/partners/leads`;
    return this.request<unknown>("POST", path, {
      body: payload,
      expectedStatus: [201],
    });
  }

  postApiV1EgpnPartnersOpportunitiesOppIdApply(opp_id: string | number): Promise<unknown> {
    let path = `/api/v1/egpn/partners/opportunities/${String(opp_id)}/apply`;
    return this.request<unknown>("POST", path, {
      expectedStatus: [201],
    });
  }

  postApiV1EgpnPartnersPartnerIdApprove(partner_id: string | number, payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/egpn/partners/${String(partner_id)}/approve`;
    return this.request<unknown>("POST", path, {
      body: payload,
      expectedStatus: [200],
    });
  }

  postApiV1EgpnPartnersRegister(payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/egpn/partners/register`;
    return this.request<unknown>("POST", path, {
      body: payload,
      expectedStatus: [201],
    });
  }

  postApiV1EgpnPartnersStudentApplications(payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/egpn/partners/student-applications`;
    return this.request<unknown>("POST", path, {
      body: payload,
      expectedStatus: [201],
    });
  }

  postApiV1EgpnPartnersStudents(payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/egpn/partners/students`;
    return this.request<unknown>("POST", path, {
      body: payload,
      expectedStatus: [201],
    });
  }

  postApiV1EgpnPartnersTeamInvite(payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/egpn/partners/team/invite`;
    return this.request<unknown>("POST", path, {
      body: payload,
      expectedStatus: [201],
    });
  }

  postApiV1EgpnPortalStudents(payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/egpn/portal/students`;
    return this.request<unknown>("POST", path, {
      body: payload,
      expectedStatus: [201],
    });
  }

  postApiV1EgpnPortalStudentsStudentIdApplications(student_id: string | number, payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/egpn/portal/students/${String(student_id)}/applications`;
    return this.request<unknown>("POST", path, {
      body: payload,
      expectedStatus: [201],
    });
  }

  postApiV1EgpnRegister(payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/egpn/register`;
    return this.request<unknown>("POST", path, {
      body: payload,
      expectedStatus: [201],
    });
  }

  postApiV1EmpireDigitalIntelligence(payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/empire-digital/intelligence`;
    return this.request<unknown>("POST", path, {
      body: payload,
      expectedStatus: [201],
    });
  }

  postApiV1EmpireDigitalIntelligenceItemIdReview(item_id: string | number, payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/empire-digital/intelligence/${String(item_id)}/review`;
    return this.request<unknown>("POST", path, {
      body: payload,
      expectedStatus: [200],
    });
  }

  postApiV1EmpireDigitalLeadsBulkQualify(payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/empire-digital/leads/bulk-qualify`;
    return this.request<unknown>("POST", path, {
      body: payload,
      expectedStatus: [200],
    });
  }

  postApiV1EmpireDigitalLeadsBulkRoute(payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/empire-digital/leads/bulk-route`;
    return this.request<unknown>("POST", path, {
      body: payload,
      expectedStatus: [200],
    });
  }

  postApiV1EmpireDigitalLeadsEscalateStale(payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/empire-digital/leads/escalate-stale`;
    return this.request<unknown>("POST", path, {
      body: payload,
      expectedStatus: [200],
    });
  }

  postApiV1EmpireDigitalRoutingRules(payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/empire-digital/routing-rules`;
    return this.request<unknown>("POST", path, {
      body: payload,
      expectedStatus: [201],
    });
  }

  postApiV1EmpireDigitalSocialMediaAnalyticsSyncAll(): Promise<unknown> {
    let path = `/api/v1/empire-digital/social-media/analytics/sync-all`;
    return this.request<unknown>("POST", path, {
      expectedStatus: [200],
    });
  }

  postApiV1EmpireDigitalSocialMediaPages(payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/empire-digital/social-media/pages`;
    return this.request<unknown>("POST", path, {
      body: payload,
      expectedStatus: [201],
    });
  }

  postApiV1EmpireDigitalSocialMediaPagesPageIdAnalytics(page_id: string | number, payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/empire-digital/social-media/pages/${String(page_id)}/analytics`;
    return this.request<unknown>("POST", path, {
      body: payload,
      expectedStatus: [201],
    });
  }

  postApiV1EmpireDigitalSocialMediaPagesPageIdAnalyticsSync(page_id: string | number): Promise<unknown> {
    let path = `/api/v1/empire-digital/social-media/pages/${String(page_id)}/analytics/sync`;
    return this.request<unknown>("POST", path, {
      expectedStatus: [200],
    });
  }

  postApiV1HousingBookings(payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/housing/bookings`;
    return this.request<unknown>("POST", path, {
      body: payload,
      expectedStatus: [201],
    });
  }

  postApiV1LearningCertificatesIssue(payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/learning/certificates/issue`;
    return this.request<unknown>("POST", path, {
      body: payload,
      expectedStatus: [201],
    });
  }

  postApiV1LearningCourses(payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/learning/courses`;
    return this.request<unknown>("POST", path, {
      body: payload,
      expectedStatus: [201],
    });
  }

  postApiV1LearningCoursesCourseIdApprove(course_id: string | number): Promise<unknown> {
    let path = `/api/v1/learning/courses/${String(course_id)}/approve`;
    return this.request<unknown>("POST", path, {
      expectedStatus: [200],
    });
  }

  postApiV1LearningCoursesCourseIdAssign(course_id: string | number, payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/learning/courses/${String(course_id)}/assign`;
    return this.request<unknown>("POST", path, {
      body: payload,
      expectedStatus: [201],
    });
  }

  postApiV1LearningCoursesCourseIdEscalate(course_id: string | number): Promise<unknown> {
    let path = `/api/v1/learning/courses/${String(course_id)}/escalate`;
    return this.request<unknown>("POST", path, {
      expectedStatus: [200],
    });
  }

  postApiV1LearningCoursesCourseIdLessons(course_id: string | number, payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/learning/courses/${String(course_id)}/lessons`;
    return this.request<unknown>("POST", path, {
      body: payload,
      expectedStatus: [201],
    });
  }

  postApiV1LearningCoursesCourseIdQuiz(course_id: string | number, payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/learning/courses/${String(course_id)}/quiz`;
    return this.request<unknown>("POST", path, {
      body: payload,
      expectedStatus: [201],
    });
  }

  postApiV1LearningCoursesCourseIdQuizQuizIdSubmit(course_id: string | number, quiz_id: string | number, payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/learning/courses/${String(course_id)}/quiz/${String(quiz_id)}/submit`;
    return this.request<unknown>("POST", path, {
      body: payload,
      expectedStatus: [200],
    });
  }

  postApiV1LearningEnrollments(payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/learning/enrollments`;
    return this.request<unknown>("POST", path, {
      body: payload,
      expectedStatus: [201],
    });
  }

  postApiV1LearningGtpEnroll(program_id?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/learning/gtp/enroll`;
    const query = new URLSearchParams();
    if (program_id !== undefined) query.set("program_id", String(program_id));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("POST", path, {
      expectedStatus: [201],
    });
  }

  postApiV1LearningInterviewSessionIdAnswer(session_id: string | number, payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/learning/interview/${String(session_id)}/answer`;
    return this.request<unknown>("POST", path, {
      body: payload,
      expectedStatus: [200],
    });
  }

  postApiV1LearningInterviewStart(payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/learning/interview/start`;
    return this.request<unknown>("POST", path, {
      body: payload,
      expectedStatus: [201],
    });
  }

  postApiV1LearningOutcomes(payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/learning/outcomes`;
    return this.request<unknown>("POST", path, {
      body: payload,
      expectedStatus: [201],
    });
  }

  postApiV1LearningQuizzesQuizIdQuestions(quiz_id: string | number, payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/learning/quizzes/${String(quiz_id)}/questions`;
    return this.request<unknown>("POST", path, {
      body: payload,
      expectedStatus: [201],
    });
  }

  postApiV1LearningTrainWeekly(): Promise<unknown> {
    let path = `/api/v1/learning/train-weekly`;
    return this.request<unknown>("POST", path, {
      expectedStatus: [200],
    });
  }

  postApiV1LearningTutorChat(payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/learning/tutor/chat`;
    return this.request<unknown>("POST", path, {
      body: payload,
      expectedStatus: [200],
    });
  }

  postApiV1LweCheckoutCourse(payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/lwe/checkout/course`;
    return this.request<unknown>("POST", path, {
      body: payload,
      expectedStatus: [201],
    });
  }

  postApiV1LweCheckoutFulfill(payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/lwe/checkout/fulfill`;
    return this.request<unknown>("POST", path, {
      body: payload,
      expectedStatus: [200],
    });
  }

  postApiV1Orgs(payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/orgs`;
    return this.request<unknown>("POST", path, {
      body: payload,
      expectedStatus: [201],
    });
  }

  postApiV1OrgsOrgIdMembers(org_id: string | number, payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/orgs/${String(org_id)}/members`;
    return this.request<unknown>("POST", path, {
      body: payload,
      expectedStatus: [201],
    });
  }

  postApiV1RecruitmentCandidateDocuments(payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/recruitment/candidate-documents`;
    return this.request<unknown>("POST", path, {
      body: payload,
      expectedStatus: [201],
    });
  }

  postApiV1RecruitmentCandidateDocumentsDocumentIdExtract(document_id: string | number): Promise<unknown> {
    let path = `/api/v1/recruitment/candidate-documents/${String(document_id)}/extract`;
    return this.request<unknown>("POST", path, {
      expectedStatus: [200],
    });
  }

  postApiV1SettlementAssistantMessage(payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/settlement/assistant/message`;
    return this.request<unknown>("POST", path, {
      body: payload,
      expectedStatus: [201],
    });
  }

  postApiV1SettlementJourneysJourneyIdGeneratePdf(journey_id: string | number, payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/settlement/journeys/${String(journey_id)}/generate-pdf`;
    return this.request<unknown>("POST", path, {
      body: payload,
      expectedStatus: [200],
    });
  }

  postApiV1Tasks(payload?: Record<string, unknown>, workspace_id?: string | number | boolean): Promise<unknown> {
    let path = `/api/v1/tasks`;
    const query = new URLSearchParams();
    if (workspace_id !== undefined) query.set("workspace_id", String(workspace_id));
    const qs = query.toString();
    if (qs) path = `${path}?${qs}`;
    return this.request<unknown>("POST", path, {
      body: payload,
      expectedStatus: [201],
    });
  }

  postApiV1TasksTemplates(payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/tasks/templates`;
    return this.request<unknown>("POST", path, {
      body: payload,
      expectedStatus: [201],
    });
  }

  postApiV1TasksTemplatesGenerate(): Promise<unknown> {
    let path = `/api/v1/tasks/templates/generate`;
    return this.request<unknown>("POST", path, {
      expectedStatus: [200],
    });
  }

  postApiV1Webhooks(payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/webhooks`;
    return this.request<unknown>("POST", path, {
      body: payload,
      expectedStatus: [201],
    });
  }

  postApiV1WebhooksDeliveriesDeliveryIdReplay(delivery_id: string | number): Promise<unknown> {
    let path = `/api/v1/webhooks/deliveries/${String(delivery_id)}/replay`;
    return this.request<unknown>("POST", path, {
      expectedStatus: [200],
    });
  }

  postApiV1WebhooksEndpointIdTest(endpoint_id: string | number): Promise<unknown> {
    let path = `/api/v1/webhooks/${String(endpoint_id)}/test`;
    return this.request<unknown>("POST", path, {
      expectedStatus: [200],
    });
  }

  putApiV1EgpnAdminStudentsStudentId(student_id: string | number, payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/egpn/admin/students/${String(student_id)}`;
    return this.request<unknown>("PUT", path, {
      body: payload,
      expectedStatus: [200],
    });
  }

  putApiV1EgpnPartnersProfile(payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/egpn/partners/profile`;
    return this.request<unknown>("PUT", path, {
      body: payload,
      expectedStatus: [200],
    });
  }

  putApiV1EmpireDigitalSocialMediaPagesPageId(page_id: string | number, payload?: Record<string, unknown>): Promise<unknown> {
    let path = `/api/v1/empire-digital/social-media/pages/${String(page_id)}`;
    return this.request<unknown>("PUT", path, {
      body: payload,
      expectedStatus: [200],
    });
  }
  // END GENERATED OPERATIONS
}
