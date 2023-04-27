import { UnknownError, NetworkError, InvalidSdkConfigurationError, InvalidRegionOrHostError, InvalidRegionError, InvalidHostError } from "@smash-sdk/core";
import { InvalidParameterError as CreateDomainInvalidParameterError } from "./types/CreateDomain/CreateDomainError";
import { UnauthorizedError as CreateDomainUnauthorizedError } from "./types/CreateDomain/CreateDomainError";
import { InvalidSubscriptionError as CreateDomainInvalidSubscriptionError } from "./types/CreateDomain/CreateDomainError";
import { DomainAlreadyExistError as CreateDomainDomainAlreadyExistError } from "./types/CreateDomain/CreateDomainError";
import { InternalServerError as CreateDomainInternalServerError } from "./types/CreateDomain/CreateDomainError";
import { BadGatewayError as CreateDomainBadGatewayError } from "./types/CreateDomain/CreateDomainError";
import { GatewayTimeoutError as CreateDomainGatewayTimeoutError } from "./types/CreateDomain/CreateDomainError";
import { InvalidParameterError as DeleteDomainInvalidParameterError } from "./types/DeleteDomain/DeleteDomainError";
import { UnauthorizedError as DeleteDomainUnauthorizedError } from "./types/DeleteDomain/DeleteDomainError";
import { NotFoundError as DeleteDomainNotFoundError } from "./types/DeleteDomain/DeleteDomainError";
import { InternalServerError as DeleteDomainInternalServerError } from "./types/DeleteDomain/DeleteDomainError";
import { BadGatewayError as DeleteDomainBadGatewayError } from "./types/DeleteDomain/DeleteDomainError";
import { GatewayTimeoutError as DeleteDomainGatewayTimeoutError } from "./types/DeleteDomain/DeleteDomainError";
import { InvalidParameterError as DeleteDomainCustomizationInvalidParameterError } from "./types/DeleteDomainCustomization/DeleteDomainCustomizationError";
import { UnauthorizedError as DeleteDomainCustomizationUnauthorizedError } from "./types/DeleteDomainCustomization/DeleteDomainCustomizationError";
import { NotFoundError as DeleteDomainCustomizationNotFoundError } from "./types/DeleteDomainCustomization/DeleteDomainCustomizationError";
import { InternalServerError as DeleteDomainCustomizationInternalServerError } from "./types/DeleteDomainCustomization/DeleteDomainCustomizationError";
import { BadGatewayError as DeleteDomainCustomizationBadGatewayError } from "./types/DeleteDomainCustomization/DeleteDomainCustomizationError";
import { GatewayTimeoutError as DeleteDomainCustomizationGatewayTimeoutError } from "./types/DeleteDomainCustomization/DeleteDomainCustomizationError";
import { InvalidParameterError as GetDomainInvalidParameterError } from "./types/GetDomain/GetDomainError";
import { UnauthorizedError as GetDomainUnauthorizedError } from "./types/GetDomain/GetDomainError";
import { NotFoundError as GetDomainNotFoundError } from "./types/GetDomain/GetDomainError";
import { InternalServerError as GetDomainInternalServerError } from "./types/GetDomain/GetDomainError";
import { BadGatewayError as GetDomainBadGatewayError } from "./types/GetDomain/GetDomainError";
import { GatewayTimeoutError as GetDomainGatewayTimeoutError } from "./types/GetDomain/GetDomainError";
import { InvalidParameterError as GetDomainCustomizationInvalidParameterError } from "./types/GetDomainCustomization/GetDomainCustomizationError";
import { UnauthorizedError as GetDomainCustomizationUnauthorizedError } from "./types/GetDomainCustomization/GetDomainCustomizationError";
import { NotFoundError as GetDomainCustomizationNotFoundError } from "./types/GetDomainCustomization/GetDomainCustomizationError";
import { InternalServerError as GetDomainCustomizationInternalServerError } from "./types/GetDomainCustomization/GetDomainCustomizationError";
import { BadGatewayError as GetDomainCustomizationBadGatewayError } from "./types/GetDomainCustomization/GetDomainCustomizationError";
import { GatewayTimeoutError as GetDomainCustomizationGatewayTimeoutError } from "./types/GetDomainCustomization/GetDomainCustomizationError";
import { InvalidParameterError as GetRecordInvalidParameterError } from "./types/GetRecord/GetRecordError";
import { NotFoundError as GetRecordNotFoundError } from "./types/GetRecord/GetRecordError";
import { InternalServerError as GetRecordInternalServerError } from "./types/GetRecord/GetRecordError";
import { BadGatewayError as GetRecordBadGatewayError } from "./types/GetRecord/GetRecordError";
import { GatewayTimeoutError as GetRecordGatewayTimeoutError } from "./types/GetRecord/GetRecordError";
import { UnauthorizedError as ListDomainsUnauthorizedError } from "./types/ListDomains/ListDomainsError";
import { InternalServerError as ListDomainsInternalServerError } from "./types/ListDomains/ListDomainsError";
import { BadGatewayError as ListDomainsBadGatewayError } from "./types/ListDomains/ListDomainsError";
import { GatewayTimeoutError as ListDomainsGatewayTimeoutError } from "./types/ListDomains/ListDomainsError";
import { InvalidParameterError as ListRecordProvidersInvalidParameterError } from "./types/ListRecordProviders/ListRecordProvidersError";
import { NotFoundError as ListRecordProvidersNotFoundError } from "./types/ListRecordProviders/ListRecordProvidersError";
import { InternalServerError as ListRecordProvidersInternalServerError } from "./types/ListRecordProviders/ListRecordProvidersError";
import { BadGatewayError as ListRecordProvidersBadGatewayError } from "./types/ListRecordProviders/ListRecordProvidersError";
import { GatewayTimeoutError as ListRecordProvidersGatewayTimeoutError } from "./types/ListRecordProviders/ListRecordProvidersError";
import { InvalidParameterError as UpdateDomainInvalidParameterError } from "./types/UpdateDomain/UpdateDomainError";
import { UnauthorizedError as UpdateDomainUnauthorizedError } from "./types/UpdateDomain/UpdateDomainError";
import { InvalidSubscriptionError as UpdateDomainInvalidSubscriptionError } from "./types/UpdateDomain/UpdateDomainError";
import { NotFoundError as UpdateDomainNotFoundError } from "./types/UpdateDomain/UpdateDomainError";
import { InternalServerError as UpdateDomainInternalServerError } from "./types/UpdateDomain/UpdateDomainError";
import { BadGatewayError as UpdateDomainBadGatewayError } from "./types/UpdateDomain/UpdateDomainError";
import { GatewayTimeoutError as UpdateDomainGatewayTimeoutError } from "./types/UpdateDomain/UpdateDomainError";
import { InvalidParameterError as UpdateDomainCustomizationInvalidParameterError } from "./types/UpdateDomainCustomization/UpdateDomainCustomizationError";
import { UnauthorizedError as UpdateDomainCustomizationUnauthorizedError } from "./types/UpdateDomainCustomization/UpdateDomainCustomizationError";
import { NotFoundError as UpdateDomainCustomizationNotFoundError } from "./types/UpdateDomainCustomization/UpdateDomainCustomizationError";
import { InternalServerError as UpdateDomainCustomizationInternalServerError } from "./types/UpdateDomainCustomization/UpdateDomainCustomizationError";
import { BadGatewayError as UpdateDomainCustomizationBadGatewayError } from "./types/UpdateDomainCustomization/UpdateDomainCustomizationError";
import { GatewayTimeoutError as UpdateDomainCustomizationGatewayTimeoutError } from "./types/UpdateDomainCustomization/UpdateDomainCustomizationError";

export const errors = {
    CreateDomainError: {
        InvalidParameterError: CreateDomainInvalidParameterError,
        UnauthorizedError: CreateDomainUnauthorizedError,
        InvalidSubscriptionError: CreateDomainInvalidSubscriptionError,
        DomainAlreadyExistError: CreateDomainDomainAlreadyExistError,
        InternalServerError: CreateDomainInternalServerError,
        BadGatewayError: CreateDomainBadGatewayError,
        GatewayTimeoutError: CreateDomainGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    DeleteDomainError: {
        InvalidParameterError: DeleteDomainInvalidParameterError,
        UnauthorizedError: DeleteDomainUnauthorizedError,
        NotFoundError: DeleteDomainNotFoundError,
        InternalServerError: DeleteDomainInternalServerError,
        BadGatewayError: DeleteDomainBadGatewayError,
        GatewayTimeoutError: DeleteDomainGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    DeleteDomainCustomizationError: {
        InvalidParameterError: DeleteDomainCustomizationInvalidParameterError,
        UnauthorizedError: DeleteDomainCustomizationUnauthorizedError,
        NotFoundError: DeleteDomainCustomizationNotFoundError,
        InternalServerError: DeleteDomainCustomizationInternalServerError,
        BadGatewayError: DeleteDomainCustomizationBadGatewayError,
        GatewayTimeoutError: DeleteDomainCustomizationGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    GetDomainError: {
        InvalidParameterError: GetDomainInvalidParameterError,
        UnauthorizedError: GetDomainUnauthorizedError,
        NotFoundError: GetDomainNotFoundError,
        InternalServerError: GetDomainInternalServerError,
        BadGatewayError: GetDomainBadGatewayError,
        GatewayTimeoutError: GetDomainGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    GetDomainCustomizationError: {
        InvalidParameterError: GetDomainCustomizationInvalidParameterError,
        UnauthorizedError: GetDomainCustomizationUnauthorizedError,
        NotFoundError: GetDomainCustomizationNotFoundError,
        InternalServerError: GetDomainCustomizationInternalServerError,
        BadGatewayError: GetDomainCustomizationBadGatewayError,
        GatewayTimeoutError: GetDomainCustomizationGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    GetRecordError: {
        InvalidParameterError: GetRecordInvalidParameterError,
        NotFoundError: GetRecordNotFoundError,
        InternalServerError: GetRecordInternalServerError,
        BadGatewayError: GetRecordBadGatewayError,
        GatewayTimeoutError: GetRecordGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ListDomainsError: {
        UnauthorizedError: ListDomainsUnauthorizedError,
        InternalServerError: ListDomainsInternalServerError,
        BadGatewayError: ListDomainsBadGatewayError,
        GatewayTimeoutError: ListDomainsGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ListRecordProvidersError: {
        InvalidParameterError: ListRecordProvidersInvalidParameterError,
        NotFoundError: ListRecordProvidersNotFoundError,
        InternalServerError: ListRecordProvidersInternalServerError,
        BadGatewayError: ListRecordProvidersBadGatewayError,
        GatewayTimeoutError: ListRecordProvidersGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    UpdateDomainError: {
        InvalidParameterError: UpdateDomainInvalidParameterError,
        UnauthorizedError: UpdateDomainUnauthorizedError,
        InvalidSubscriptionError: UpdateDomainInvalidSubscriptionError,
        NotFoundError: UpdateDomainNotFoundError,
        InternalServerError: UpdateDomainInternalServerError,
        BadGatewayError: UpdateDomainBadGatewayError,
        GatewayTimeoutError: UpdateDomainGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    UpdateDomainCustomizationError: {
        InvalidParameterError: UpdateDomainCustomizationInvalidParameterError,
        UnauthorizedError: UpdateDomainCustomizationUnauthorizedError,
        NotFoundError: UpdateDomainCustomizationNotFoundError,
        InternalServerError: UpdateDomainCustomizationInternalServerError,
        BadGatewayError: UpdateDomainCustomizationBadGatewayError,
        GatewayTimeoutError: UpdateDomainCustomizationGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    InvalidSdkConfigurationError,
    InvalidRegionOrHostError,
    InvalidRegionError,
    InvalidHostError,
};
