import { SDKError } from "@smash-sdk/core";

export class UnauthorizedError extends SDKError {}

export class InvalidModeOrPaymentProviderError extends SDKError {}

export class NotFoundError extends SDKError {}

export class InternalServerError extends SDKError {}

export class BadGatewayError extends SDKError {}

export class GatewayTimeoutError extends SDKError {}

export default {
    UnauthorizedError,
    InvalidModeOrPaymentProviderError,
    NotFoundError,
    InternalServerError,
    BadGatewayError,
    GatewayTimeoutError,
};
