import { SDKError } from "@smash-sdk/core";

/**
                         
        */
export class BadRequestError extends SDKError {}

/**
                         
        */
export class PasswordRevokedError extends SDKError {}
/**
                         
        */
export class IdentityDisabledError extends SDKError {}
/**
                         
        */
export class NotAllowedError extends SDKError {}
/**
                         
        */
export class InvalidRefreshTokenError extends SDKError {}

/**
                         
        */
export class InternalServerError extends SDKError {}

export default {
    BadRequestError,
    PasswordRevokedError,
    IdentityDisabledError,
    NotAllowedError,
    InvalidRefreshTokenError,
    InternalServerError,
};
