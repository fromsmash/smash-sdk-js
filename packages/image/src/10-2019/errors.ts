import { UnknownError, NetworkError, InvalidSdkConfigurationError, InvalidRegionOrHostError, InvalidRegionError, InvalidHostError } from "@smash-sdk/core";
import { InvalidParameterError as CreateImageInvalidParameterError } from "./types/CreateImage/CreateImageError";
import { UnauthorizedError as CreateImageUnauthorizedError } from "./types/CreateImage/CreateImageError";
import { ConflictError as CreateImageConflictError } from "./types/CreateImage/CreateImageError";
import { InternalServerError as CreateImageInternalServerError } from "./types/CreateImage/CreateImageError";
import { BadGatewayError as CreateImageBadGatewayError } from "./types/CreateImage/CreateImageError";
import { GatewayTimeoutError as CreateImageGatewayTimeoutError } from "./types/CreateImage/CreateImageError";
import { InvalidParameterError as GetImageInvalidParameterError } from "./types/GetImage/GetImageError";
import { UnauthorizedError as GetImageUnauthorizedError } from "./types/GetImage/GetImageError";
import { NotFoundError as GetImageNotFoundError } from "./types/GetImage/GetImageError";
import { InternalServerError as GetImageInternalServerError } from "./types/GetImage/GetImageError";
import { BadGatewayError as GetImageBadGatewayError } from "./types/GetImage/GetImageError";
import { GatewayTimeoutError as GetImageGatewayTimeoutError } from "./types/GetImage/GetImageError";

export const errors = {
    CreateImageError: {
        InvalidParameterError: CreateImageInvalidParameterError,
        UnauthorizedError: CreateImageUnauthorizedError,
        ConflictError: CreateImageConflictError,
        InternalServerError: CreateImageInternalServerError,
        BadGatewayError: CreateImageBadGatewayError,
        GatewayTimeoutError: CreateImageGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    GetImageError: {
        InvalidParameterError: GetImageInvalidParameterError,
        UnauthorizedError: GetImageUnauthorizedError,
        NotFoundError: GetImageNotFoundError,
        InternalServerError: GetImageInternalServerError,
        BadGatewayError: GetImageBadGatewayError,
        GatewayTimeoutError: GetImageGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    InvalidSdkConfigurationError,
    InvalidRegionOrHostError,
    InvalidRegionError,
    InvalidHostError,
};
