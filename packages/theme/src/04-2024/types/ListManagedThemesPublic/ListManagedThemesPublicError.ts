import { SDKError } from "@smash-sdk/core";

export class GenericError extends SDKError {}

export class UnauthorizedError extends GenericError {}

export class InternalServerError extends GenericError {}

export class BadGatewayError extends GenericError {}

export class GatewayTimeoutError extends GenericError {}

export default {
    GenericError,
    UnauthorizedError,
    InternalServerError,
    BadGatewayError,
    GatewayTimeoutError,
};
