import { SDKError } from "@smash-sdk/core";

export class InvalidParameterError extends SDKError {}

export class UnauthorizedError extends SDKError {}

export class InvalidCertificateError extends SDKError {}

export class NotFoundError extends SDKError {}

export class InternalServerError extends SDKError {}

export class BadGatewayError extends SDKError {}

export class GatewayTimeoutError extends SDKError {}

export default {
    InvalidParameterError,
    UnauthorizedError,
    InvalidCertificateError,
    NotFoundError,
    InternalServerError,
    BadGatewayError,
    GatewayTimeoutError,
};
