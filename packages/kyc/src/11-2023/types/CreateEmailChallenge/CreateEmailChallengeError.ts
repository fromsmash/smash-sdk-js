import { SDKError } from "@smash-sdk/core";

export class InvalidParameterError extends SDKError {}

export class UnauthorizedError extends SDKError {}

export class NotificationAlreadySentError extends SDKError {}

export class ChallengeAlreadyExistError extends SDKError {}

export class InternalServerError extends SDKError {}

export class BadGatewayError extends SDKError {}

export class GatewayTimeoutError extends SDKError {}

export default {
    InvalidParameterError,
    UnauthorizedError,
    NotificationAlreadySentError,
    ChallengeAlreadyExistError,
    InternalServerError,
    BadGatewayError,
    GatewayTimeoutError,
};
