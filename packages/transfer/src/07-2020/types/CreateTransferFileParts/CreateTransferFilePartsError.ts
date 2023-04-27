import { SDKError } from "@smash-sdk/core";

export class InvalidParameterError extends SDKError {}

export class UnauthorizedError extends SDKError {}

export class TransferAlreadyLockedError extends SDKError {}

export class FileAlreadyLockedError extends SDKError {}

export class NotFoundError extends SDKError {}

export class InternalServerError extends SDKError {}

export class BadGatewayError extends SDKError {}

export class GatewayTimeoutError extends SDKError {}

export default {
    InvalidParameterError,
    UnauthorizedError,
    TransferAlreadyLockedError,
    FileAlreadyLockedError,
    NotFoundError,
    InternalServerError,
    BadGatewayError,
    GatewayTimeoutError,
};