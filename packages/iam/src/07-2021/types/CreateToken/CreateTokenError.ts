import { SDKError } from "@smash-sdk/core";

export class InvalidParameterError extends SDKError {}

export class InvalidCredentialsError extends SDKError {}

export class PasswordRevokedError extends SDKError {}

export class IdentityDisabledError extends SDKError {}

export class InvalidAuthenticationModeError extends SDKError {}

export class NotFoundError extends SDKError {}

export class ConflictError extends SDKError {}

export class InternalServerError extends SDKError {}

export class BadGatewayError extends SDKError {}

export class GatewayTimeoutError extends SDKError {}

export default {
    InvalidParameterError,
    InvalidCredentialsError,
    PasswordRevokedError,
    IdentityDisabledError,
    InvalidAuthenticationModeError,
    NotFoundError,
    ConflictError,
    InternalServerError,
    BadGatewayError,
    GatewayTimeoutError,
};
