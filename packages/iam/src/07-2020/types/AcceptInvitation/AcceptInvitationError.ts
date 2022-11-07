import { SDKError } from "smash-sdk-core";

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

export default {
    BadRequestError,
    InvalidSecretError,
    InvalidInviteError,
    ExpiredSecretError,
    InternalServerError,
};
