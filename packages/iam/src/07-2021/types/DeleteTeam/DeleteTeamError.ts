import { SDKError } from "smash-sdk-core";

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
export class NotFoundError extends SDKError {}

/**
                         
        */
export class InternalServerError extends SDKError {}

export default {
    BadRequestError,
    UnauthorizedError,
    ForbiddenError,
    NotFoundError,
    InternalServerError,
};
