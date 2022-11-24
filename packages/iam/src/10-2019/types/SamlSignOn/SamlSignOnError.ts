import { SDKError } from "@smash-sdk/core";

/**
                         
        */
export class BadRequestError extends SDKError {}

/**
                         
        */
export class WrongConfigError extends SDKError {}

/**
                         
        */
export class NotFoundError extends SDKError {}

/**
                         
        */
export class ConflictError extends SDKError {}

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
    WrongConfigError,
    NotFoundError,
    ConflictError,
    InternalServerError,
    BadGatewayError,
    GatewayTimeoutError,
};
