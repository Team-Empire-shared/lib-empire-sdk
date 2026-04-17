"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpireOClient = void 0;
const errors_1 = require("./errors");
const DEFAULT_BASE_URL = "https://api.empireoe.com";
const RETRYABLE_STATUS = new Set([429, 502, 503, 504]);
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
class EmpireOClient {
    constructor(options) {
        this.baseUrl = (options.baseUrl ?? DEFAULT_BASE_URL).replace(/\/+$/, "");
        this.apiKey = options.apiKey;
        this.maxRetries = Math.max(0, options.maxRetries ?? 2);
        this.backoffMs = Math.max(0, options.backoffMs ?? 500);
        this.onRequestEvent = options.onRequestEvent;
    }
    async request(method, path, opts = {}) {
        const expected = new Set(opts.expectedStatus ?? [200]);
        let lastError;
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
                if (response.status === 204)
                    return undefined;
                const text = await response.text();
                return (text ? JSON.parse(text) : undefined);
            }
            let body;
            try {
                body = await response.json();
            }
            catch {
                body = undefined;
            }
            const requestId = response.headers.get("x-correlation-id") ?? undefined;
            const detail = typeof body === "object" && body !== null && "detail" in body
                ? String(body.detail ?? "") : undefined;
            const retryAfter = response.headers.get("retry-after");
            const retryAfterSeconds = retryAfter ? Number(retryAfter) : undefined;
            if (response.status === 429) {
                const quota = (detail ?? "").toLowerCase().includes("quota");
                lastError = quota
                    ? new errors_1.QuotaExceededError("Daily quota exceeded", 429, detail, requestId, body, retryAfterSeconds)
                    : new errors_1.RateLimitError("Rate limited", 429, detail, requestId, body, retryAfterSeconds);
            }
            else {
                lastError = new errors_1.APIError(`API error ${response.status}`, response.status, detail, requestId, body);
            }
            if (!RETRYABLE_STATUS.has(response.status) || attempt >= this.maxRetries)
                break;
            await sleep(retryAfterSeconds ? retryAfterSeconds * 1000 : this.backoffMs * 2 ** attempt);
        }
        throw lastError ?? new errors_1.APIError("Unknown failure", 0);
    }
    authMe() { return this.request("GET", "/api/v1/auth/me"); }
    listApiKeys() { return this.request("GET", "/api/v1/api-keys"); }
    createApiKey(p) { return this.request("POST", "/api/v1/api-keys", { body: p, expectedStatus: [201] }); }
    revokeApiKey(id) { return this.request("DELETE", `/api/v1/api-keys/${id}`, { expectedStatus: [200, 204] }); }
    listWebhooks() { return this.request("GET", "/api/v1/webhooks"); }
    createWebhook(p) { return this.request("POST", "/api/v1/webhooks", { body: p, expectedStatus: [201] }); }
    listWebhookDeliveries(id, limit = 50, offset = 0) {
        return this.request("GET", `/api/v1/webhooks/${id}/deliveries?limit=${limit}&offset=${offset}`);
    }
    listTasks() { return this.request("GET", "/api/v1/tasks"); }
    createTask(p) { return this.request("POST", "/api/v1/tasks", { body: p, expectedStatus: [201] }); }
    updateTask(id, p) { return this.request("PATCH", `/api/v1/tasks/${id}`, { body: p }); }
    listApprovals() { return this.request("GET", "/api/v1/approvals"); }
    approveApproval(id, p) { return this.request("POST", `/api/v1/approvals/${id}/approve`, { body: p }); }
    listOrganizations() { return this.request("GET", "/api/v1/orgs"); }
    listAutomationTriggers() { return this.request("GET", "/api/v1/automations/triggers"); }
    listAutomationWorkflows() { return this.request("GET", "/api/v1/automations/workflows"); }
    agentChat(p) { return this.request("POST", "/api/v1/agents/chat", { body: p }); }
    agentMultiTurn(p) { return this.request("POST", "/api/v1/agents/multi-turn", { body: p }); }
}
exports.EmpireOClient = EmpireOClient;
