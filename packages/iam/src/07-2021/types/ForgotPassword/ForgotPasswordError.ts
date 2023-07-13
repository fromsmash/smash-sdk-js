import { SDKError } from "@smash-sdk/core";

export class InvalidParameterError extends SDKError {}

export class InvalidIdentityUsernameError extends SDKError {}

export class NotFoundError extends SDKError {}

export class InternalServerError extends SDKError {}

export class BadGatewayError extends SDKError {}

export class GatewayTimeoutError extends SDKError {}

export default {
    InvalidParameterError,
    InvalidIdentityUsernameError,
    NotFoundError,
    InternalServerError,
    BadGatewayError,
    GatewayTimeoutError,
};
