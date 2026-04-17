"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuotaExceededError = exports.RateLimitError = exports.APIError = exports.SDKError = void 0;
class SDKError extends Error {
    constructor(message) { super(message); this.name = "SDKError"; }
}
exports.SDKError = SDKError;
class APIError extends SDKError {
    constructor(message, statusCode, detail, requestId, body) {
        super(message);
        this.name = "APIError";
        this.statusCode = statusCode;
        this.detail = detail;
        this.requestId = requestId;
        this.body = body;
    }
}
exports.APIError = APIError;
class RateLimitError extends APIError {
    constructor(message, statusCode, detail, requestId, body, retryAfterSeconds) {
        super(message, statusCode, detail, requestId, body);
        this.name = "RateLimitError";
        this.retryAfterSeconds = retryAfterSeconds;
    }
}
exports.RateLimitError = RateLimitError;
class QuotaExceededError extends RateLimitError {
    constructor(message, statusCode, detail, requestId, body, retryAfterSeconds) {
        super(message, statusCode, detail, requestId, body, retryAfterSeconds);
        this.name = "QuotaExceededError";
    }
}
exports.QuotaExceededError = QuotaExceededError;
