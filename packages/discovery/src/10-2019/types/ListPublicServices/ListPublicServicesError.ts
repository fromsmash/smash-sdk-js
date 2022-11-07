import { SDKError } from "@smash-sdk/core";

/**
                         
        */
export class BadRequestError extends SDKError {}

/**
                         
        */
export class InternalServerError extends SDKError {}

export default {
    BadRequestError,
    InternalServerError,
};
