import { SDKError } from "@smash-sdk/core";

export class GenericError extends SDKError { }

export class BadRequestError extends GenericError { }

export class UnauthorizedError extends GenericError { }

export class FobiddenError extends GenericError { }

export class NotFoundError extends GenericError { }

export class InternalServerError extends GenericError { }

export class BadGatewayError extends GenericError { }

export class GatewayTimeoutError extends GenericError { }

export default {
        GenericError,
        BadRequestError,
        UnauthorizedError,
        FobiddenError,
        NotFoundError,
        InternalServerError,
        BadGatewayError,
        GatewayTimeoutError,
};
