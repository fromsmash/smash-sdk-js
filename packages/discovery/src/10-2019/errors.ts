import { UnknownError, NetworkError } from "@smash-sdk/core";
import { BadRequestError as ListPublicServicesBadRequestError } from "./types/ListPublicServices/ListPublicServicesError";
import { InternalServerError as ListPublicServicesInternalServerError } from "./types/ListPublicServices/ListPublicServicesError";

export const errors = {
    ListPublicServicesError: {
        BadRequest: ListPublicServicesBadRequestError,
        InternalServerError: ListPublicServicesInternalServerError,
        UnknownError,
        NetworkError,
    },
};
