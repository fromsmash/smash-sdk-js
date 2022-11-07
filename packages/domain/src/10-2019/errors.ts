import { UnknownError, NetworkError } from "@smash-sdk/core";
import { BadRequestError as CreateDomainBadRequestError } from "./types/CreateDomain/CreateDomainError";
import { UnauthorizedError as CreateDomainUnauthorizedError } from "./types/CreateDomain/CreateDomainError";
import { ForbiddenToCreateDomainError as CreateDomainForbiddenToCreateDomainError } from "./types/CreateDomain/CreateDomainError";
import { ConflictError as CreateDomainConflictError } from "./types/CreateDomain/CreateDomainError";
import { InternalServerError as CreateDomainInternalServerError } from "./types/CreateDomain/CreateDomainError";
import { BadGatewayError as CreateDomainBadGatewayError } from "./types/CreateDomain/CreateDomainError";
import { GatewayTimeoutError as CreateDomainGatewayTimeoutError } from "./types/CreateDomain/CreateDomainError";
import { BadRequestError as DeleteDomainBadRequestError } from "./types/DeleteDomain/DeleteDomainError";
import { UnauthorizedError as DeleteDomainUnauthorizedError } from "./types/DeleteDomain/DeleteDomainError";
import { NotFoundError as DeleteDomainNotFoundError } from "./types/DeleteDomain/DeleteDomainError";
import { InternalServerError as DeleteDomainInternalServerError } from "./types/DeleteDomain/DeleteDomainError";
import { BadGatewayError as DeleteDomainBadGatewayError } from "./types/DeleteDomain/DeleteDomainError";
import { GatewayTimeoutError as DeleteDomainGatewayTimeoutError } from "./types/DeleteDomain/DeleteDomainError";
import { BadRequestError as DeleteDomainCustomizationBadRequestError } from "./types/DeleteDomainCustomization/DeleteDomainCustomizationError";
import { UnauthorizedError as DeleteDomainCustomizationUnauthorizedError } from "./types/DeleteDomainCustomization/DeleteDomainCustomizationError";
import { NotFoundError as DeleteDomainCustomizationNotFoundError } from "./types/DeleteDomainCustomization/DeleteDomainCustomizationError";
import { InternalServerError as DeleteDomainCustomizationInternalServerError } from "./types/DeleteDomainCustomization/DeleteDomainCustomizationError";
import { BadGatewayError as DeleteDomainCustomizationBadGatewayError } from "./types/DeleteDomainCustomization/DeleteDomainCustomizationError";
import { GatewayTimeoutError as DeleteDomainCustomizationGatewayTimeoutError } from "./types/DeleteDomainCustomization/DeleteDomainCustomizationError";
import { BadRequestError as GetDomainBadRequestError } from "./types/GetDomain/GetDomainError";
import { UnauthorizedError as GetDomainUnauthorizedError } from "./types/GetDomain/GetDomainError";
import { NotFoundError as GetDomainNotFoundError } from "./types/GetDomain/GetDomainError";
import { InternalServerError as GetDomainInternalServerError } from "./types/GetDomain/GetDomainError";
import { BadGatewayError as GetDomainBadGatewayError } from "./types/GetDomain/GetDomainError";
import { GatewayTimeoutError as GetDomainGatewayTimeoutError } from "./types/GetDomain/GetDomainError";
import { BadRequestError as GetDomainCustomizationBadRequestError } from "./types/GetDomainCustomization/GetDomainCustomizationError";
import { UnauthorizedError as GetDomainCustomizationUnauthorizedError } from "./types/GetDomainCustomization/GetDomainCustomizationError";
import { NotFoundError as GetDomainCustomizationNotFoundError } from "./types/GetDomainCustomization/GetDomainCustomizationError";
import { InternalServerError as GetDomainCustomizationInternalServerError } from "./types/GetDomainCustomization/GetDomainCustomizationError";
import { BadGatewayError as GetDomainCustomizationBadGatewayError } from "./types/GetDomainCustomization/GetDomainCustomizationError";
import { GatewayTimeoutError as GetDomainCustomizationGatewayTimeoutError } from "./types/GetDomainCustomization/GetDomainCustomizationError";
import { BadRequestError as GetRecordBadRequestError } from "./types/GetRecord/GetRecordError";
import { NotFoundError as GetRecordNotFoundError } from "./types/GetRecord/GetRecordError";
import { InternalServerError as GetRecordInternalServerError } from "./types/GetRecord/GetRecordError";
import { BadGatewayError as GetRecordBadGatewayError } from "./types/GetRecord/GetRecordError";
import { GatewayTimeoutError as GetRecordGatewayTimeoutError } from "./types/GetRecord/GetRecordError";
import { BadRequestError as ListDomainsBadRequestError } from "./types/ListDomains/ListDomainsError";
import { UnauthorizedError as ListDomainsUnauthorizedError } from "./types/ListDomains/ListDomainsError";
import { InternalServerError as ListDomainsInternalServerError } from "./types/ListDomains/ListDomainsError";
import { BadGatewayError as ListDomainsBadGatewayError } from "./types/ListDomains/ListDomainsError";
import { GatewayTimeoutError as ListDomainsGatewayTimeoutError } from "./types/ListDomains/ListDomainsError";
import { BadRequestError as ListRecordProvidersBadRequestError } from "./types/ListRecordProviders/ListRecordProvidersError";
import { NotFoundError as ListRecordProvidersNotFoundError } from "./types/ListRecordProviders/ListRecordProvidersError";
import { InternalServerError as ListRecordProvidersInternalServerError } from "./types/ListRecordProviders/ListRecordProvidersError";
import { BadGatewayError as ListRecordProvidersBadGatewayError } from "./types/ListRecordProviders/ListRecordProvidersError";
import { GatewayTimeoutError as ListRecordProvidersGatewayTimeoutError } from "./types/ListRecordProviders/ListRecordProvidersError";
import { BadRequestError as UpdateDomainBadRequestError } from "./types/UpdateDomain/UpdateDomainError";
import { UnauthorizedError as UpdateDomainUnauthorizedError } from "./types/UpdateDomain/UpdateDomainError";
import { ForbiddenToUpdateDomainError as UpdateDomainForbiddenToUpdateDomainError } from "./types/UpdateDomain/UpdateDomainError";
import { NotFoundError as UpdateDomainNotFoundError } from "./types/UpdateDomain/UpdateDomainError";
import { InternalServerError as UpdateDomainInternalServerError } from "./types/UpdateDomain/UpdateDomainError";
import { BadGatewayError as UpdateDomainBadGatewayError } from "./types/UpdateDomain/UpdateDomainError";
import { GatewayTimeoutError as UpdateDomainGatewayTimeoutError } from "./types/UpdateDomain/UpdateDomainError";
import { BadRequestError as UpdateDomainCustomizationBadRequestError } from "./types/UpdateDomainCustomization/UpdateDomainCustomizationError";
import { UnauthorizedError as UpdateDomainCustomizationUnauthorizedError } from "./types/UpdateDomainCustomization/UpdateDomainCustomizationError";
import { NotFoundError as UpdateDomainCustomizationNotFoundError } from "./types/UpdateDomainCustomization/UpdateDomainCustomizationError";
import { InternalServerError as UpdateDomainCustomizationInternalServerError } from "./types/UpdateDomainCustomization/UpdateDomainCustomizationError";
import { BadGatewayError as UpdateDomainCustomizationBadGatewayError } from "./types/UpdateDomainCustomization/UpdateDomainCustomizationError";
import { GatewayTimeoutError as UpdateDomainCustomizationGatewayTimeoutError } from "./types/UpdateDomainCustomization/UpdateDomainCustomizationError";

export const errors = {
    CreateDomainError: {
        BadRequest: CreateDomainBadRequestError,
        Unauthorized: CreateDomainUnauthorizedError,
        ForbiddenToCreateDomain: CreateDomainForbiddenToCreateDomainError,
        Conflict: CreateDomainConflictError,
        InternalServerError: CreateDomainInternalServerError,
        BadGateway: CreateDomainBadGatewayError,
        GatewayTimeout: CreateDomainGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    DeleteDomainError: {
        BadRequest: DeleteDomainBadRequestError,
        Unauthorized: DeleteDomainUnauthorizedError,
        NotFound: DeleteDomainNotFoundError,
        InternalServerError: DeleteDomainInternalServerError,
        BadGateway: DeleteDomainBadGatewayError,
        GatewayTimeout: DeleteDomainGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    DeleteDomainCustomizationError: {
        BadRequest: DeleteDomainCustomizationBadRequestError,
        Unauthorized: DeleteDomainCustomizationUnauthorizedError,
        NotFound: DeleteDomainCustomizationNotFoundError,
        InternalServerError: DeleteDomainCustomizationInternalServerError,
        BadGateway: DeleteDomainCustomizationBadGatewayError,
        GatewayTimeout: DeleteDomainCustomizationGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    GetDomainError: {
        BadRequest: GetDomainBadRequestError,
        Unauthorized: GetDomainUnauthorizedError,
        NotFound: GetDomainNotFoundError,
        InternalServerError: GetDomainInternalServerError,
        BadGateway: GetDomainBadGatewayError,
        GatewayTimeout: GetDomainGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    GetDomainCustomizationError: {
        BadRequest: GetDomainCustomizationBadRequestError,
        Unauthorized: GetDomainCustomizationUnauthorizedError,
        NotFound: GetDomainCustomizationNotFoundError,
        InternalServerError: GetDomainCustomizationInternalServerError,
        BadGateway: GetDomainCustomizationBadGatewayError,
        GatewayTimeout: GetDomainCustomizationGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    GetRecordError: {
        BadRequest: GetRecordBadRequestError,
        NotFound: GetRecordNotFoundError,
        InternalServerError: GetRecordInternalServerError,
        BadGateway: GetRecordBadGatewayError,
        GatewayTimeout: GetRecordGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ListDomainsError: {
        BadRequest: ListDomainsBadRequestError,
        Unauthorized: ListDomainsUnauthorizedError,
        InternalServerError: ListDomainsInternalServerError,
        BadGateway: ListDomainsBadGatewayError,
        GatewayTimeout: ListDomainsGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ListRecordProvidersError: {
        BadRequest: ListRecordProvidersBadRequestError,
        NotFound: ListRecordProvidersNotFoundError,
        InternalServerError: ListRecordProvidersInternalServerError,
        BadGateway: ListRecordProvidersBadGatewayError,
        GatewayTimeout: ListRecordProvidersGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    UpdateDomainError: {
        BadRequest: UpdateDomainBadRequestError,
        Unauthorized: UpdateDomainUnauthorizedError,
        ForbiddenToUpdateDomain: UpdateDomainForbiddenToUpdateDomainError,
        NotFound: UpdateDomainNotFoundError,
        InternalServerError: UpdateDomainInternalServerError,
        BadGateway: UpdateDomainBadGatewayError,
        GatewayTimeout: UpdateDomainGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    UpdateDomainCustomizationError: {
        BadRequest: UpdateDomainCustomizationBadRequestError,
        Unauthorized: UpdateDomainCustomizationUnauthorizedError,
        NotFound: UpdateDomainCustomizationNotFoundError,
        InternalServerError: UpdateDomainCustomizationInternalServerError,
        BadGateway: UpdateDomainCustomizationBadGatewayError,
        GatewayTimeout: UpdateDomainCustomizationGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
};
