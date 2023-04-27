import { UnknownError, NetworkError, InvalidSdkConfigurationError, InvalidRegionOrHostError, InvalidRegionError, InvalidHostError } from "@smash-sdk/core";
import { InvalidParameterError as ComputeVatInvalidParameterError } from "./types/ComputeVat/ComputeVatError";
import { UnauthorizedError as ComputeVatUnauthorizedError } from "./types/ComputeVat/ComputeVatError";
import { NotFoundError as ComputeVatNotFoundError } from "./types/ComputeVat/ComputeVatError";
import { InternalServerError as ComputeVatInternalServerError } from "./types/ComputeVat/ComputeVatError";
import { BadGatewayError as ComputeVatBadGatewayError } from "./types/ComputeVat/ComputeVatError";
import { GatewayTimeoutError as ComputeVatGatewayTimeoutError } from "./types/ComputeVat/ComputeVatError";
import { UnauthorizedError as ListCountriesUnauthorizedError } from "./types/ListCountries/ListCountriesError";
import { InternalServerError as ListCountriesInternalServerError } from "./types/ListCountries/ListCountriesError";
import { BadGatewayError as ListCountriesBadGatewayError } from "./types/ListCountries/ListCountriesError";
import { GatewayTimeoutError as ListCountriesGatewayTimeoutError } from "./types/ListCountries/ListCountriesError";
import { InvalidParameterError as VerifyVatNumberInvalidParameterError } from "./types/VerifyVatNumber/VerifyVatNumberError";
import { UnauthorizedError as VerifyVatNumberUnauthorizedError } from "./types/VerifyVatNumber/VerifyVatNumberError";
import { InternalServerError as VerifyVatNumberInternalServerError } from "./types/VerifyVatNumber/VerifyVatNumberError";
import { BadGatewayError as VerifyVatNumberBadGatewayError } from "./types/VerifyVatNumber/VerifyVatNumberError";
import { GatewayTimeoutError as VerifyVatNumberGatewayTimeoutError } from "./types/VerifyVatNumber/VerifyVatNumberError";

export const errors = {
    ComputeVatError: {
        InvalidParameterError: ComputeVatInvalidParameterError,
        UnauthorizedError: ComputeVatUnauthorizedError,
        NotFoundError: ComputeVatNotFoundError,
        InternalServerError: ComputeVatInternalServerError,
        BadGatewayError: ComputeVatBadGatewayError,
        GatewayTimeoutError: ComputeVatGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ListCountriesError: {
        UnauthorizedError: ListCountriesUnauthorizedError,
        InternalServerError: ListCountriesInternalServerError,
        BadGatewayError: ListCountriesBadGatewayError,
        GatewayTimeoutError: ListCountriesGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    VerifyVatNumberError: {
        InvalidParameterError: VerifyVatNumberInvalidParameterError,
        UnauthorizedError: VerifyVatNumberUnauthorizedError,
        InternalServerError: VerifyVatNumberInternalServerError,
        BadGatewayError: VerifyVatNumberBadGatewayError,
        GatewayTimeoutError: VerifyVatNumberGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    InvalidSdkConfigurationError,
    InvalidRegionOrHostError,
    InvalidRegionError,
    InvalidHostError,
};
