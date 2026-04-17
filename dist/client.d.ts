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
export declare class EmpireOClient {
    private readonly baseUrl;
    private readonly apiKey;
    private readonly maxRetries;
    private readonly backoffMs;
    private readonly onRequestEvent?;
    constructor(options: ClientOptions);
    private request;
    authMe(): Promise<any>;
    listApiKeys(): Promise<any>;
    createApiKey(p: any): Promise<any>;
    revokeApiKey(id: number): Promise<any>;
    listWebhooks(): Promise<any>;
    createWebhook(p: any): Promise<any>;
    listWebhookDeliveries(id: number, limit?: number, offset?: number): Promise<any>;
    listTasks(): Promise<any>;
    createTask(p: any): Promise<any>;
    updateTask(id: number, p: any): Promise<any>;
    listApprovals(): Promise<any>;
    approveApproval(id: number, p: any): Promise<any>;
    listOrganizations(): Promise<any>;
    listAutomationTriggers(): Promise<any>;
    listAutomationWorkflows(): Promise<any>;
    agentChat(p: any): Promise<any>;
    agentMultiTurn(p: any): Promise<any>;
}
