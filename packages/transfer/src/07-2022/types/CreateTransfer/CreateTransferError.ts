import { SDKError } from "@smash-sdk/core";

export class MissingSenderError extends SDKError {}

export class MissingReceiversError extends SDKError {}

export class InvalidDeliveryError extends SDKError {}

export class InvalidAvailabilityDurationError extends SDKError {}

export class InvalidParameterError extends SDKError {}

export class UnauthorizedError extends SDKError {}

export class InvalidSubscriptionError extends SDKError {}

export class EmailNotAllowedError extends SDKError {}

export class UsageExceededError extends SDKError {}

export class PasswordRequiredError extends SDKError {}

export class EmailNotVerifiedError extends SDKError {}

export class CustomUrlAlreadyInUseError extends SDKError {}

export class InternalServerError extends SDKError {}

export class BadGatewayError extends SDKError {}

export class GatewayTimeoutError extends SDKError {}

export default {
    MissingSenderError,
    MissingReceiversError,
    InvalidDeliveryError,
    InvalidAvailabilityDurationError,
    InvalidParameterError,
    UnauthorizedError,
    InvalidSubscriptionError,
    EmailNotAllowedError,
    UsageExceededError,
    PasswordRequiredError,
    EmailNotVerifiedError,
    CustomUrlAlreadyInUseError,
    InternalServerError,
    BadGatewayError,
    GatewayTimeoutError,
};
