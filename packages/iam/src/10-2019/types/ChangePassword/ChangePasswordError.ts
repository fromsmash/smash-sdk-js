import { SDKError } from "smash-sdk-core";

/**
                         
        */
export class BadRequestError extends SDKError {}

/**
                         
        */
export class InvalidSecretError extends SDKError {}
/**
                         
        */
export class InvalidPasswordSecretError extends SDKError {}
/**
                         
        */
export class ExpiredPasswordSecretError extends SDKError {}

/**
                         
        */
export class InternalServerError extends SDKError {}

export default {
    BadRequestError,
    InvalidSecretError,
    InvalidPasswordSecretError,
    ExpiredPasswordSecretError,
    InternalServerError,
};
