import { SDKError } from "@smash-sdk/core";

/**
                         
        */
export class BadRequestError extends SDKError {}

/**
                         
        */
export class InvalidSecretError extends SDKError {}
/**
                         
        */
export class InvalidInviteError extends SDKError {}
/**
                         
        */
export class ExpiredSecretError extends SDKError {}

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
    InvalidSecretError,
    InvalidInviteError,
    ExpiredSecretError,
    InternalServerError,
    BadGatewayError,
    GatewayTimeoutError,
};
