import { SDKError } from "@smash-sdk/core";

export class GenericError extends SDKError {}

export class InvalidParameterError extends GenericError {}

export class UnauthorizedError extends GenericError {}

export class PasswordDoesNotMatchError extends GenericError {}

export class OwnerUsageExceededError extends GenericError {}

export class AccessorUsageExceededError extends GenericError {}

export class NotFoundError extends GenericError {}

export class InternalServerError extends GenericError {}

export class BadGatewayError extends GenericError {}

export class GatewayTimeoutError extends GenericError {}

export default {
    GenericError,
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
