import { SDKError } from "@smash-sdk/core";

export class InvalidParameterError extends SDKError {}

export class UnauthorizedError extends SDKError {}

export class InvalidPaymentInformationsError extends SDKError {}

export class InvalidPlanError extends SDKError {}

export class NotFoundError extends SDKError {}

export class InternalServerError extends SDKError {}

export class BadGatewayError extends SDKError {}

export class GatewayTimeoutError extends SDKError {}

export default {
    InvalidParameterError,
    UnauthorizedError,
    InvalidPaymentInformationsError,
    InvalidPlanError,
    NotFoundError,
    InternalServerError,
    BadGatewayError,
    GatewayTimeoutError,
};
