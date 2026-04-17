export declare class SDKError extends Error {
    constructor(message: string);
}
export declare class APIError extends SDKError {
    statusCode: number;
    detail?: string;
    requestId?: string;
    body?: unknown;
    constructor(message: string, statusCode: number, detail?: string, requestId?: string, body?: unknown);
}
export declare class RateLimitError extends APIError {
    retryAfterSeconds?: number;
    constructor(message: string, statusCode: number, detail?: string, requestId?: string, body?: unknown, retryAfterSeconds?: number);
}
export declare class QuotaExceededError extends RateLimitError {
    constructor(message: string, statusCode: number, detail?: string, requestId?: string, body?: unknown, retryAfterSeconds?: number);
}
