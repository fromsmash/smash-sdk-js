import { UnknownError, NetworkError, InvalidSdkConfigurationError, InvalidRegionOrHostError, InvalidRegionError, InvalidHostError } from "@smash-sdk/core";
import { InvalidParameterError as GetTeamCustomizationInvalidParameterError } from "./types/GetTeamCustomization/GetTeamCustomizationError";
import { UnauthorizedError as GetTeamCustomizationUnauthorizedError } from "./types/GetTeamCustomization/GetTeamCustomizationError";
import { NotFoundError as GetTeamCustomizationNotFoundError } from "./types/GetTeamCustomization/GetTeamCustomizationError";
import { InternalServerError as GetTeamCustomizationInternalServerError } from "./types/GetTeamCustomization/GetTeamCustomizationError";
import { BadGatewayError as GetTeamCustomizationBadGatewayError } from "./types/GetTeamCustomization/GetTeamCustomizationError";
import { GatewayTimeoutError as GetTeamCustomizationGatewayTimeoutError } from "./types/GetTeamCustomization/GetTeamCustomizationError";
import { InvalidParameterError as ListTeamCustomizationsInvalidParameterError } from "./types/ListTeamCustomizations/ListTeamCustomizationsError";
import { UnauthorizedError as ListTeamCustomizationsUnauthorizedError } from "./types/ListTeamCustomizations/ListTeamCustomizationsError";
import { NotFoundError as ListTeamCustomizationsNotFoundError } from "./types/ListTeamCustomizations/ListTeamCustomizationsError";
import { InternalServerError as ListTeamCustomizationsInternalServerError } from "./types/ListTeamCustomizations/ListTeamCustomizationsError";
import { BadGatewayError as ListTeamCustomizationsBadGatewayError } from "./types/ListTeamCustomizations/ListTeamCustomizationsError";
import { GatewayTimeoutError as ListTeamCustomizationsGatewayTimeoutError } from "./types/ListTeamCustomizations/ListTeamCustomizationsError";

export const errors = {
    GetTeamCustomizationError: {
        InvalidParameterError: GetTeamCustomizationInvalidParameterError,
        UnauthorizedError: GetTeamCustomizationUnauthorizedError,
        NotFoundError: GetTeamCustomizationNotFoundError,
        InternalServerError: GetTeamCustomizationInternalServerError,
        BadGatewayError: GetTeamCustomizationBadGatewayError,
        GatewayTimeoutError: GetTeamCustomizationGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ListTeamCustomizationsError: {
        InvalidParameterError: ListTeamCustomizationsInvalidParameterError,
        UnauthorizedError: ListTeamCustomizationsUnauthorizedError,
        NotFoundError: ListTeamCustomizationsNotFoundError,
        InternalServerError: ListTeamCustomizationsInternalServerError,
        BadGatewayError: ListTeamCustomizationsBadGatewayError,
        GatewayTimeoutError: ListTeamCustomizationsGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    InvalidSdkConfigurationError,
    InvalidRegionOrHostError,
    InvalidRegionError,
    InvalidHostError,
};
