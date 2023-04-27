import { SDKError } from "@smash-sdk/core";

export class InvalidParameterError extends SDKError {}

export class PasswordRevokedError extends SDKError {}

export class IdentityDisabledError extends SDKError {}

export class NotAllowedError extends SDKError {}

export class InvalidRefreshTokenError extends SDKError {}

export class NotFoundError extends SDKError {}

export class InternalServerError extends SDKError {}

export class BadGatewayError extends SDKError {}

export class GatewayTimeoutError extends SDKError {}

export default {
    InvalidParameterError,
    PasswordRevokedError,
    IdentityDisabledError,
    NotAllowedError,
    InvalidRefreshTokenError,
    NotFoundError,
    InternalServerError,
    BadGatewayError,
    GatewayTimeoutError,
};
