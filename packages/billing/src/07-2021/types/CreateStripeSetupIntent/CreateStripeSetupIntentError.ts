import { SDKError } from "@smash-sdk/core";

export class UnauthorizedError extends SDKError {}

export class InvalidPaymentProviderError extends SDKError {}

export class NotFoundError extends SDKError {}

export class InternalServerError extends SDKError {}

export class BadGatewayError extends SDKError {}

export class GatewayTimeoutError extends SDKError {}

export default {
    UnauthorizedError,
    InvalidPaymentProviderError,
    NotFoundError,
    InternalServerError,
    BadGatewayError,
    GatewayTimeoutError,
};
