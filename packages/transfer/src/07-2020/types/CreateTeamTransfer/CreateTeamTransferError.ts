import { SDKError } from "smash-sdk/core";

/**
                         
        */
export class BadRequestError extends SDKError {}

/**
                         
        */
export class UnauthorizedError extends SDKError {}

/**
                         
        */
export class ForbiddenError extends SDKError {}

/**
                         
        */
export class CustomUrlAlreadyInUseError extends SDKError {}

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
    ForbiddenError,
    CustomUrlAlreadyInUseError,
    InternalServerError,
    BadGatewayError,
    GatewayTimeoutError,
};
