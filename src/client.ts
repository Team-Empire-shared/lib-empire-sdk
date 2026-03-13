import { APIError, QuotaExceededError, RateLimitError } from "./errors";

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
      if (expected.has(response.status)) {
        if (response.status === 204) return undefined as T;
        const text = await response.text();
        return (text ? JSON.parse(text) : undefined) as T;
      }
      let body: unknown;
      try { body = await response.json(); } catch { body = undefined; }
      const requestId = response.headers.get("x-correlation-id") ?? undefined;
      const detail = typeof body === "object" && body !== null && "detail" in body
        ? String((body as { detail?: unknown }).detail ?? "") : undefined;
      const retryAfter = response.headers.get("retry-after");
      const retryAfterSeconds = retryAfter ? Number(retryAfter) : undefined;
      if (response.status === 429) {
        const quota = (detail ?? "").toLowerCase().includes("quota");
        lastError = quota
          ? new QuotaExceededError("Daily quota exceeded", 429, detail, requestId, body, retryAfterSeconds)
          : new RateLimitError("Rate limited", 429, detail, requestId, body, retryAfterSeconds);
      } else {
        lastError = new APIError(`API error ${response.status}`, response.status, detail, requestId, body);
      }
      if (!RETRYABLE_STATUS.has(response.status) || attempt >= this.maxRetries) break;
      await sleep(retryAfterSeconds ? retryAfterSeconds * 1000 : this.backoffMs * 2 ** attempt);
    }
    throw lastError ?? new APIError("Unknown failure", 0);
  }

  authMe() { return this.request<any>("GET", "/api/v1/auth/me"); }
  listApiKeys() { return this.request<any>("GET", "/api/v1/api-keys"); }
  createApiKey(p: any) { return this.request<any>("POST", "/api/v1/api-keys", { body: p, expectedStatus: [201] }); }
  revokeApiKey(id: number) { return this.request<any>("DELETE", `/api/v1/api-keys/${id}`, { expectedStatus: [200,204] }); }
  listWebhooks() { return this.request<any>("GET", "/api/v1/webhooks"); }
  createWebhook(p: any) { return this.request<any>("POST", "/api/v1/webhooks", { body: p, expectedStatus: [201] }); }
  listWebhookDeliveries(id: number, limit=50, offset=0) {
    return this.request<any>("GET", `/api/v1/webhooks/${id}/deliveries?limit=${limit}&offset=${offset}`);
  }
  listTasks() { return this.request<any>("GET", "/api/v1/tasks"); }
  createTask(p: any) { return this.request<any>("POST", "/api/v1/tasks", { body: p, expectedStatus: [201] }); }
  updateTask(id: number, p: any) { return this.request<any>("PATCH", `/api/v1/tasks/${id}`, { body: p }); }
  listApprovals() { return this.request<any>("GET", "/api/v1/approvals"); }
  approveApproval(id: number, p: any) { return this.request<any>("POST", `/api/v1/approvals/${id}/approve`, { body: p }); }
  listOrganizations() { return this.request<any>("GET", "/api/v1/orgs"); }
  listAutomationTriggers() { return this.request<any>("GET", "/api/v1/automations/triggers"); }
  listAutomationWorkflows() { return this.request<any>("GET", "/api/v1/automations/workflows"); }
  agentChat(p: any) { return this.request<any>("POST", "/api/v1/agents/chat", { body: p }); }
  agentMultiTurn(p: any) { return this.request<any>("POST", "/api/v1/agents/multi-turn", { body: p }); }
}
