import { UnknownError, NetworkError, InvalidSdkConfigurationError, InvalidRegionOrHostError, InvalidRegionError, InvalidHostError } from "@smash-sdk/core";
import { GenericError as ListManagedThemesPublicGenericError } from "./types/ListManagedThemesPublic/ListManagedThemesPublicError";
import { UnauthorizedError as ListManagedThemesPublicUnauthorizedError } from "./types/ListManagedThemesPublic/ListManagedThemesPublicError";
import { InternalServerError as ListManagedThemesPublicInternalServerError } from "./types/ListManagedThemesPublic/ListManagedThemesPublicError";
import { BadGatewayError as ListManagedThemesPublicBadGatewayError } from "./types/ListManagedThemesPublic/ListManagedThemesPublicError";
import { GatewayTimeoutError as ListManagedThemesPublicGatewayTimeoutError } from "./types/ListManagedThemesPublic/ListManagedThemesPublicError";

export const errors = {
    ListManagedThemesPublic: {
        UnauthorizedError: ListManagedThemesPublicUnauthorizedError,
        InternalServerError: ListManagedThemesPublicInternalServerError,
        BadGatewayError: ListManagedThemesPublicBadGatewayError,
        GatewayTimeoutError: ListManagedThemesPublicGatewayTimeoutError,
        GenericError: ListManagedThemesPublicGenericError,
        UnknownError,
        NetworkError,
    },
    ListManagedThemesPublicError: {
        UnauthorizedError: ListManagedThemesPublicUnauthorizedError,
        InternalServerError: ListManagedThemesPublicInternalServerError,
        BadGatewayError: ListManagedThemesPublicBadGatewayError,
        GatewayTimeoutError: ListManagedThemesPublicGatewayTimeoutError,
        GenericError: ListManagedThemesPublicGenericError,
        UnknownError,
        NetworkError,
    },
    InvalidSdkConfigurationError,
    InvalidRegionOrHostError,
    InvalidRegionError,
    InvalidHostError,
};
