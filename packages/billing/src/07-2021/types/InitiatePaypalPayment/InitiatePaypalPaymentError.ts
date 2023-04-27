import { SDKError } from "@smash-sdk/core";

export class UnauthorizedError extends SDKError {}

export class InvalidPaymentInformationsError extends SDKError {}

export class InvalidSubscriptionError extends SDKError {}

export class NoPaymentRequiredError extends SDKError {}

export class NotFoundError extends SDKError {}

export class InternalServerError extends SDKError {}

export class BadGatewayError extends SDKError {}

export class GatewayTimeoutError extends SDKError {}

export default {
    UnauthorizedError,
    InvalidPaymentInformationsError,
    InvalidSubscriptionError,
    NoPaymentRequiredError,
    NotFoundError,
    InternalServerError,
    BadGatewayError,
    GatewayTimeoutError,
};
