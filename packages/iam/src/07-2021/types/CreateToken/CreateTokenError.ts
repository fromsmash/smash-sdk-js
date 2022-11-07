import { SDKError } from "@smash-sdk/core";

/**
                         
        */
export class BadRequestError extends SDKError {}

/**
                         
        */
export class BadCredentialsError extends SDKError {}
/**
                         
        */
export class PasswordRevokedError extends SDKError {}
/**
                         
        */
export class IdentityDisabledError extends SDKError {}
/**
                         
        */
export class WrongAuthError extends SDKError {}

/**
                         
        */
export class NotFoundError extends SDKError {}

/**
                         
        */
export class ConflictError extends SDKError {}

/**
                         
        */
export class InternalServerError extends SDKError {}

export default {
    BadRequestError,
    BadCredentialsError,
    PasswordRevokedError,
    IdentityDisabledError,
    WrongAuthError,
    NotFoundError,
    ConflictError,
    InternalServerError,
};
