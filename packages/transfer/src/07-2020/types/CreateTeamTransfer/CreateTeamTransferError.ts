import { SDKError } from "@smash-sdk/core";

export class GenericError extends SDKError {}

export class MissingSenderError extends GenericError {}

export class MissingReceiversError extends GenericError {}

export class InvalidDeliveryError extends GenericError {}

export class InvalidAvailabilityDurationError extends GenericError {}

export class InvalidParameterError extends GenericError {}

export class UnauthorizedError extends GenericError {}

export class InvalidSubscriptionError extends GenericError {}

export class EmailNotAllowedError extends GenericError {}

export class UsageExceededError extends GenericError {}

export class PasswordRequiredError extends GenericError {}

export class CustomUrlAlreadyInUseError extends GenericError {}

export class InternalServerError extends GenericError {}

export class BadGatewayError extends GenericError {}

export class GatewayTimeoutError extends GenericError {}

export default {
    GenericError,
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
    CustomUrlAlreadyInUseError,
    InternalServerError,
    BadGatewayError,
    GatewayTimeoutError,
};
