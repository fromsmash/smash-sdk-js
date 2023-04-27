import { SDKError } from "@smash-sdk/core";

export class InvalidParameterError extends SDKError {}

export class InvalidSecretError extends SDKError {}

export class InvalidPasswordSecretError extends SDKError {}

export class ExpiredPasswordSecretError extends SDKError {}

export class InternalServerError extends SDKError {}

export class BadGatewayError extends SDKError {}

export class GatewayTimeoutError extends SDKError {}

export default {
    InvalidParameterError,
    InvalidSecretError,
    InvalidPasswordSecretError,
    ExpiredPasswordSecretError,
    InternalServerError,
    BadGatewayError,
    GatewayTimeoutError,
};
