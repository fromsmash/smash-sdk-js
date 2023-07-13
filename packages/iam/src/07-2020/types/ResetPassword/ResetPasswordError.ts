import { SDKError } from "@smash-sdk/core";

export class InvalidParameterError extends SDKError {}

export class InvalidForgotPasswordError extends SDKError {}

export class InvalidForgotPasswordSecretError extends SDKError {}

export class ExpiredForgotPasswordError extends SDKError {}

export class NotFoundError extends SDKError {}

export class InternalServerError extends SDKError {}

export class BadGatewayError extends SDKError {}

export class GatewayTimeoutError extends SDKError {}

export default {
    InvalidParameterError,
    InvalidForgotPasswordError,
    InvalidForgotPasswordSecretError,
    ExpiredForgotPasswordError,
    NotFoundError,
    InternalServerError,
    BadGatewayError,
    GatewayTimeoutError,
};
