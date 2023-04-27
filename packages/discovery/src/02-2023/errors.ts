import { UnknownError, NetworkError, InvalidSdkConfigurationError, InvalidRegionOrHostError, InvalidRegionError, InvalidHostError } from "@smash-sdk/core";
import { InternalServerError as ListPublicServicesInternalServerError } from "./types/ListPublicServices/ListPublicServicesError";
import { BadGatewayError as ListPublicServicesBadGatewayError } from "./types/ListPublicServices/ListPublicServicesError";
import { GatewayTimeoutError as ListPublicServicesGatewayTimeoutError } from "./types/ListPublicServices/ListPublicServicesError";

export const errors = {
    ListPublicServicesError: {
        InternalServerError: ListPublicServicesInternalServerError,
        BadGatewayError: ListPublicServicesBadGatewayError,
        GatewayTimeoutError: ListPublicServicesGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    InvalidSdkConfigurationError,
    InvalidRegionOrHostError,
    InvalidRegionError,
    InvalidHostError,
};
