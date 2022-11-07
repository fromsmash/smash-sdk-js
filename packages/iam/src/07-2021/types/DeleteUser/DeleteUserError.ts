import { SDKError } from "smash-sdk/core";

/**
                         
        */
export class BadRequestError extends SDKError {}

/**
                         
        */
export class UnauthorizedError extends SDKError {}

/**
                         
        */
export class ForbiddenHasUserError extends SDKError {}
/**
                         
        */
export class ForbiddenHasRoleError extends SDKError {}
/**
                         
        */
export class ForbiddenHasGroupError extends SDKError {}

/**
                         
        */
export class NotFoundError extends SDKError {}

/**
                         
        */
export class InternalServerError extends SDKError {}

export default {
    BadRequestError,
    UnauthorizedError,
    ForbiddenHasUserError,
    ForbiddenHasRoleError,
    ForbiddenHasGroupError,
    NotFoundError,
    InternalServerError,
};
