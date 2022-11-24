import { SDKError } from "@smash-sdk/core";

/**
                         
        */
export class BadRequestError extends SDKError {}

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
    InternalServerError,
    BadGatewayError,
    GatewayTimeoutError,
};
