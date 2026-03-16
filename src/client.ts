import { APIError, QuotaExceededError, RateLimitError } from "./errors";
import type {
  AgentChatRequest, AgentChatResponse, ApprovalDecision, ApprovalRead,
  CampaignABTestResult, CampaignVariantCreate, CampaignVariantRead, CampaignVariantStats,
  ContactCreate, ContactListResponse, ContactRead, ContactUpdate,
  DealCreate, DealRead, DealUpdate,
  EGPNPartnerRead, EGPNPartnerRegistration,
  EventCreate, EventRead,
  HealthCheckResponse, IntegrationRead, LeadRead,
  MultiTurnResponse, NoteCreate, NoteRead, NotificationRead,
  OrganizationRead, ProjectCreate, ProjectRead,
  TaskCreate, TaskRead, TaskUpdate, TriggerRead,
  UserMeRead,
  WebhookDeliveryListResponse, WebhookEndpointCreate, WebhookEndpointCreateResponse, WebhookEndpointRead,
} from "./types";

export interface ClientOptions {
  apiKey: string;
  baseUrl?: string;
  maxRetries?: number;
  backoffMs?: number;
  onRequestEvent?: (event: RequestEvent) => void;
}

export interface RequestEvent {
  method: "GET" | "POST" | "PATCH" | "DELETE";
  path: string;
  attempt: number;
  statusCode: number;
  durationMs: number;
  requestId?: string;
  retriable: boolean;
  retried: boolean;
  errorType?: string;
}

const DEFAULT_BASE_URL = "https://api.empireoe.com";
const RETRYABLE_STATUS = new Set([429, 502, 503, 504]);

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export class EmpireOClient {
  private readonly baseUrl: string;
  private readonly apiKey: string;
  private readonly maxRetries: number;
  private readonly backoffMs: number;
  private readonly onRequestEvent?: (event: RequestEvent) => void;

  constructor(options: ClientOptions) {
    this.baseUrl = (options.baseUrl ?? DEFAULT_BASE_URL).replace(/\/+$/, "");
    this.apiKey = options.apiKey;
    this.maxRetries = Math.max(0, options.maxRetries ?? 2);
    this.backoffMs = Math.max(0, options.backoffMs ?? 500);
    this.onRequestEvent = options.onRequestEvent;
  }

  private async request<T>(
    method: "GET" | "POST" | "PATCH" | "DELETE",
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
      const durationMs = Date.now() - started;
      const requestId = response.headers.get("x-correlation-id") ?? undefined;

      if (expected.has(response.status)) {
        this.onRequestEvent?.({ method, path, attempt, statusCode: response.status, durationMs, requestId, retriable: false, retried: attempt > 0 });
        if (response.status === 204) return undefined as T;
        const text = await response.text();
        return (text ? JSON.parse(text) : undefined) as T;
      }

      let body: unknown;
      try { body = await response.json(); } catch { body = undefined; }
      const detail = typeof body === "object" && body !== null && "detail" in body
        ? String((body as { detail?: unknown }).detail ?? "") : undefined;
      const retryAfter = response.headers.get("retry-after");
      const retryAfterSeconds = retryAfter ? Number(retryAfter) : undefined;
      const retriable = RETRYABLE_STATUS.has(response.status);

      this.onRequestEvent?.({ method, path, attempt, statusCode: response.status, durationMs, requestId, retriable, retried: attempt > 0, errorType: response.status === 429 ? "rate_limit" : "api_error" });

      if (response.status === 429) {
        const quota = (detail ?? "").toLowerCase().includes("quota");
        lastError = quota
          ? new QuotaExceededError("Daily quota exceeded", 429, detail, requestId, body, retryAfterSeconds)
          : new RateLimitError("Rate limited", 429, detail, requestId, body, retryAfterSeconds);
      } else {
        lastError = new APIError(`API error ${response.status}`, response.status, detail, requestId, body);
      }
      if (!retriable || attempt >= this.maxRetries) break;
      await sleep(retryAfterSeconds ? retryAfterSeconds * 1000 : this.backoffMs * 2 ** attempt);
    }
    throw lastError ?? new APIError("Unknown failure", 0);
  }

  // ── Health ──────────────────────────────────────────────────────────────
  healthCheck() { return this.request<HealthCheckResponse>("GET", "/health"); }

  // ── Auth ────────────────────────────────────────────────────────────────
  authMe() { return this.request<UserMeRead>("GET", "/api/v1/auth/me"); }

  // ── Contacts ────────────────────────────────────────────────────────────
  listContacts(limit = 50, offset = 0) { return this.request<ContactListResponse>("GET", `/api/v1/contacts?limit=${limit}&offset=${offset}`); }
  getContact(id: number) { return this.request<ContactRead>("GET", `/api/v1/contacts/${id}`); }
  createContact(data: ContactCreate) { return this.request<ContactRead>("POST", "/api/v1/contacts", { body: data, expectedStatus: [201] }); }
  updateContact(id: number, data: ContactUpdate) { return this.request<ContactRead>("PATCH", `/api/v1/contacts/${id}`, { body: data }); }

  // ── Leads ───────────────────────────────────────────────────────────────
  listLeads(limit = 50, offset = 0) { return this.request<LeadRead[]>("GET", `/api/v1/leads?limit=${limit}&offset=${offset}`); }

  // ── Deals ───────────────────────────────────────────────────────────────
  listDeals(limit = 50, offset = 0) { return this.request<DealRead[]>("GET", `/api/v1/deals?limit=${limit}&offset=${offset}`); }
  createDeal(data: DealCreate) { return this.request<DealRead>("POST", "/api/v1/deals", { body: data, expectedStatus: [201] }); }
  updateDeal(id: number, data: DealUpdate) { return this.request<DealRead>("PATCH", `/api/v1/deals/${id}`, { body: data }); }

  // ── Notes ───────────────────────────────────────────────────────────────
  listNotes(entityType?: string, entityId?: number) {
    const params = new URLSearchParams();
    if (entityType) params.set("entity_type", entityType);
    if (entityId) params.set("entity_id", String(entityId));
    return this.request<NoteRead[]>("GET", `/api/v1/notes?${params}`);
  }
  createNote(data: NoteCreate) { return this.request<NoteRead>("POST", "/api/v1/notes", { body: data, expectedStatus: [201] }); }

  // ── Events ──────────────────────────────────────────────────────────────
  listEvents() { return this.request<EventRead[]>("GET", "/api/v1/events"); }
  createEvent(data: EventCreate) { return this.request<EventRead>("POST", "/api/v1/events", { body: data, expectedStatus: [201] }); }

  // ── Projects ────────────────────────────────────────────────────────────
  listProjects() { return this.request<ProjectRead[]>("GET", "/api/v1/projects"); }
  createProject(data: ProjectCreate) { return this.request<ProjectRead>("POST", "/api/v1/projects", { body: data, expectedStatus: [201] }); }

  // ── Tasks ───────────────────────────────────────────────────────────────
  listTasks() { return this.request<TaskRead[]>("GET", "/api/v1/tasks"); }
  createTask(data: TaskCreate) { return this.request<TaskRead>("POST", "/api/v1/tasks", { body: data, expectedStatus: [201] }); }
  updateTask(id: number, data: TaskUpdate) { return this.request<TaskRead>("PATCH", `/api/v1/tasks/${id}`, { body: data }); }

  // ── Approvals ───────────────────────────────────────────────────────────
  listApprovals() { return this.request<ApprovalRead[]>("GET", "/api/v1/approvals"); }
  approveApproval(id: number, decision: ApprovalDecision) { return this.request<ApprovalRead>("POST", `/api/v1/approvals/${id}/approve`, { body: decision }); }

  // ── Organizations ───────────────────────────────────────────────────────
  listOrganizations() { return this.request<OrganizationRead[]>("GET", "/api/v1/orgs"); }

  // ── Integrations ────────────────────────────────────────────────────────
  listIntegrations() { return this.request<IntegrationRead[]>("GET", "/api/v1/integrations"); }

  // ── Notifications ───────────────────────────────────────────────────────
  listNotifications(limit = 50) { return this.request<NotificationRead[]>("GET", `/api/v1/notifications?limit=${limit}`); }
  markNotificationRead(id: number) { return this.request<NotificationRead>("PATCH", `/api/v1/notifications/${id}/read`); }

  // ── Webhooks ────────────────────────────────────────────────────────────
  listWebhooks() { return this.request<WebhookEndpointRead[]>("GET", "/api/v1/webhooks"); }
  createWebhook(data: WebhookEndpointCreate) { return this.request<WebhookEndpointCreateResponse>("POST", "/api/v1/webhooks", { body: data, expectedStatus: [201] }); }
  listWebhookDeliveries(id: number, limit = 50, offset = 0) {
    return this.request<WebhookDeliveryListResponse>("GET", `/api/v1/webhooks/${id}/deliveries?limit=${limit}&offset=${offset}`);
  }

  // ── Automations ─────────────────────────────────────────────────────────
  listAutomationTriggers() { return this.request<TriggerRead[]>("GET", "/api/v1/automations/triggers"); }

  // ── AI Agents ───────────────────────────────────────────────────────────
  agentChat(data: AgentChatRequest) { return this.request<AgentChatResponse>("POST", "/api/v1/agents/chat", { body: data }); }
  agentMultiTurn(data: AgentChatRequest) { return this.request<MultiTurnResponse>("POST", "/api/v1/agents/multi-turn", { body: data }); }

  // ── EGPN ────────────────────────────────────────────────────────────────
  registerPartner(data: EGPNPartnerRegistration) { return this.request<EGPNPartnerRead>("POST", "/api/v1/egpn/register", { body: data, expectedStatus: [201] }); }
  listPartners() { return this.request<EGPNPartnerRead[]>("GET", "/api/v1/egpn/partners"); }

  // ── Campaigns ───────────────────────────────────────────────────────────
  createCampaignVariant(campaignId: number, data: CampaignVariantCreate) {
    return this.request<CampaignVariantRead>("POST", `/api/v1/campaigns/${campaignId}/variants`, { body: data, expectedStatus: [201] });
  }
  getCampaignVariantStats(campaignId: number) {
    return this.request<CampaignVariantStats[]>("GET", `/api/v1/campaigns/${campaignId}/variant-stats`);
  }
  getCampaignABTest(campaignId: number) {
    return this.request<CampaignABTestResult>("GET", `/api/v1/campaigns/${campaignId}/ab-test`);
  }

  // ── API Keys ────────────────────────────────────────────────────────────
  listApiKeys() { return this.request<ApiKeyListResponse>("GET", "/api/v1/api-keys"); }
  createApiKey(data: { name: string; scopes?: string; expires_in_days?: number }) {
    return this.request<ApiKeyCreateResponse>("POST", "/api/v1/api-keys", { body: data, expectedStatus: [201] });
  }
  revokeApiKey(id: number) { return this.request<void>("DELETE", `/api/v1/api-keys/${id}`, { expectedStatus: [200, 204] }); }
}
