import { SDKError } from "@smash-sdk/core";

export class InvalidParameterError extends SDKError {}

export class UnauthorizedError extends SDKError {}

export class NotMatchError extends SDKError {}

export class WrongAuthError extends SDKError {}

export class InternalServerError extends SDKError {}

export class BadGatewayError extends SDKError {}

export class GatewayTimeoutError extends SDKError {}

export default {
    InvalidParameterError,
    UnauthorizedError,
    NotMatchError,
    WrongAuthError,
    InternalServerError,
    BadGatewayError,
    GatewayTimeoutError,
};
