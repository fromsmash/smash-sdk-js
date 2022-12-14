import { SDKError } from "@smash-sdk/core";

/**
                         
        */
export class BadRequestError extends SDKError {}

/**
                         
        */
export class UnauthorizedError extends SDKError {}

/**
                         
        */
export class ForbiddenToUpdateDomainError extends SDKError {}

/**
                         
        */
export class NotFoundError extends SDKError {}

/**
                         
        */
export class InternalServerError extends SDKError {}

/**
                         
        */
export class BadGatewayError extends SDKError {}

/**
                         
        */
export class GatewayTimeoutError extends SDKError {}

export default {
    BadRequestError,
    UnauthorizedError,
    ForbiddenToUpdateDomainError,
    NotFoundError,
    InternalServerError,
    BadGatewayError,
    GatewayTimeoutError,
};
