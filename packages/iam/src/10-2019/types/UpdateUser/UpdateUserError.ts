import { SDKError } from "smash-sdk-core";

/**
                         
        */
export class BadRequestError extends SDKError {}

/**
                         
        */
export class UnauthorizedError extends SDKError {}

/**
                         
        */
export class WrongAuthError extends SDKError {}

/**
                         
        */
export class NotFoundError extends SDKError {}

/**
                         
        */
export class InternalServerError extends SDKError {}

export default {
    BadRequestError,
    UnauthorizedError,
    WrongAuthError,
    NotFoundError,
    InternalServerError,
};
