import { SDKError } from "@smash-sdk/core";

export class InvalidParameterError extends SDKError {}

export class UnauthorizedError extends SDKError {}

export class PasswordDoesNotMatchError extends SDKError {}

export class OwnerUsageExceededError extends SDKError {}

export class AccessorUsageExceededError extends SDKError {}

export class NotFoundError extends SDKError {}

export class InternalServerError extends SDKError {}

export class BadGatewayError extends SDKError {}

export class GatewayTimeoutError extends SDKError {}

export default {
    InvalidParameterError,
    UnauthorizedError,
    PasswordDoesNotMatchError,
    OwnerUsageExceededError,
    AccessorUsageExceededError,
    NotFoundError,
    InternalServerError,
    BadGatewayError,
    GatewayTimeoutError,
};
