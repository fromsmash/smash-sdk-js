import { SDKError } from "@smash-sdk/core";

export class InvalidVatNumberError extends SDKError {}

export class InvalidParameterError extends SDKError {}

export class UnauthorizedError extends SDKError {}

export class VatNumberNotUpdatableError extends SDKError {}

export class NotFoundError extends SDKError {}

export class InternalServerError extends SDKError {}

export class BadGatewayError extends SDKError {}

export class GatewayTimeoutError extends SDKError {}

export default {
    InvalidVatNumberError,
    InvalidParameterError,
    UnauthorizedError,
    VatNumberNotUpdatableError,
    NotFoundError,
    InternalServerError,
    BadGatewayError,
    GatewayTimeoutError,
};
