import { SDKError } from "@smash-sdk/core";

export class InvalidParameterError extends SDKError {}

export class UnauthorizedError extends SDKError {}

export class InvalidSubscriptionError extends SDKError {}

export class DomainAlreadyExistError extends SDKError {}

export class InternalServerError extends SDKError {}

export class BadGatewayError extends SDKError {}

export class GatewayTimeoutError extends SDKError {}

export default {
    InvalidParameterError,
    UnauthorizedError,
    InvalidSubscriptionError,
    DomainAlreadyExistError,
    InternalServerError,
    BadGatewayError,
    GatewayTimeoutError,
};
