export class SDKError extends Error {
    constructor(message) {
        super(message);
        this.name = "SDKError";
    }
}
export class APIError extends SDKError {
    constructor(message, statusCode, detail, requestId, body) {
        super(message);
        this.name = "APIError";
        this.statusCode = statusCode;
        this.detail = detail;
        this.requestId = requestId;
        this.body = body;
    }
}
export class RateLimitError extends APIError {
    constructor(message, statusCode, detail, requestId, body, retryAfterSeconds) {
        super(message, statusCode, detail, requestId, body);
        this.name = "RateLimitError";
        this.retryAfterSeconds = retryAfterSeconds;
    }
}
export class QuotaExceededError extends RateLimitError {
    constructor(message, statusCode, detail, requestId, body, retryAfterSeconds) {
        super(message, statusCode, detail, requestId, body, retryAfterSeconds);
        this.name = "QuotaExceededError";
    }
}
