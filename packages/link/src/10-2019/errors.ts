import { UnknownError, NetworkError, InvalidSdkConfigurationError, InvalidRegionOrHostError, InvalidRegionError, InvalidHostError } from "@smash-sdk/core";
import { InvalidParameterError as DeleteLinkInvalidParameterError } from "./types/DeleteLink/DeleteLinkError";
import { UnauthorizedError as DeleteLinkUnauthorizedError } from "./types/DeleteLink/DeleteLinkError";
import { NotFoundError as DeleteLinkNotFoundError } from "./types/DeleteLink/DeleteLinkError";
import { InternalServerError as DeleteLinkInternalServerError } from "./types/DeleteLink/DeleteLinkError";
import { BadGatewayError as DeleteLinkBadGatewayError } from "./types/DeleteLink/DeleteLinkError";
import { GatewayTimeoutError as DeleteLinkGatewayTimeoutError } from "./types/DeleteLink/DeleteLinkError";
import { InvalidParameterError as GetLinkInvalidParameterError } from "./types/GetLink/GetLinkError";
import { UnauthorizedError as GetLinkUnauthorizedError } from "./types/GetLink/GetLinkError";
import { NotFoundError as GetLinkNotFoundError } from "./types/GetLink/GetLinkError";
import { InternalServerError as GetLinkInternalServerError } from "./types/GetLink/GetLinkError";
import { BadGatewayError as GetLinkBadGatewayError } from "./types/GetLink/GetLinkError";
import { GatewayTimeoutError as GetLinkGatewayTimeoutError } from "./types/GetLink/GetLinkError";
import { InvalidParameterError as GetTargetInvalidParameterError } from "./types/GetTarget/GetTargetError";
import { UnauthorizedError as GetTargetUnauthorizedError } from "./types/GetTarget/GetTargetError";
import { NotFoundError as GetTargetNotFoundError } from "./types/GetTarget/GetTargetError";
import { InternalServerError as GetTargetInternalServerError } from "./types/GetTarget/GetTargetError";
import { BadGatewayError as GetTargetBadGatewayError } from "./types/GetTarget/GetTargetError";
import { GatewayTimeoutError as GetTargetGatewayTimeoutError } from "./types/GetTarget/GetTargetError";
import { InvalidParameterError as GetTeamLinkInvalidParameterError } from "./types/GetTeamLink/GetTeamLinkError";
import { UnauthorizedError as GetTeamLinkUnauthorizedError } from "./types/GetTeamLink/GetTeamLinkError";
import { NotFoundError as GetTeamLinkNotFoundError } from "./types/GetTeamLink/GetTeamLinkError";
import { InternalServerError as GetTeamLinkInternalServerError } from "./types/GetTeamLink/GetTeamLinkError";
import { BadGatewayError as GetTeamLinkBadGatewayError } from "./types/GetTeamLink/GetTeamLinkError";
import { GatewayTimeoutError as GetTeamLinkGatewayTimeoutError } from "./types/GetTeamLink/GetTeamLinkError";
import { InvalidParameterError as GetUserLinkInvalidParameterError } from "./types/GetUserLink/GetUserLinkError";
import { UnauthorizedError as GetUserLinkUnauthorizedError } from "./types/GetUserLink/GetUserLinkError";
import { NotFoundError as GetUserLinkNotFoundError } from "./types/GetUserLink/GetUserLinkError";
import { InternalServerError as GetUserLinkInternalServerError } from "./types/GetUserLink/GetUserLinkError";
import { BadGatewayError as GetUserLinkBadGatewayError } from "./types/GetUserLink/GetUserLinkError";
import { GatewayTimeoutError as GetUserLinkGatewayTimeoutError } from "./types/GetUserLink/GetUserLinkError";
import { UnauthorizedError as ListLinksUnauthorizedError } from "./types/ListLinks/ListLinksError";
import { InternalServerError as ListLinksInternalServerError } from "./types/ListLinks/ListLinksError";
import { BadGatewayError as ListLinksBadGatewayError } from "./types/ListLinks/ListLinksError";
import { GatewayTimeoutError as ListLinksGatewayTimeoutError } from "./types/ListLinks/ListLinksError";
import { InvalidParameterError as ListTeamLinksInvalidParameterError } from "./types/ListTeamLinks/ListTeamLinksError";
import { UnauthorizedError as ListTeamLinksUnauthorizedError } from "./types/ListTeamLinks/ListTeamLinksError";
import { InternalServerError as ListTeamLinksInternalServerError } from "./types/ListTeamLinks/ListTeamLinksError";
import { BadGatewayError as ListTeamLinksBadGatewayError } from "./types/ListTeamLinks/ListTeamLinksError";
import { GatewayTimeoutError as ListTeamLinksGatewayTimeoutError } from "./types/ListTeamLinks/ListTeamLinksError";
import { InvalidParameterError as ListUserLinksInvalidParameterError } from "./types/ListUserLinks/ListUserLinksError";
import { UnauthorizedError as ListUserLinksUnauthorizedError } from "./types/ListUserLinks/ListUserLinksError";
import { InternalServerError as ListUserLinksInternalServerError } from "./types/ListUserLinks/ListUserLinksError";
import { BadGatewayError as ListUserLinksBadGatewayError } from "./types/ListUserLinks/ListUserLinksError";
import { GatewayTimeoutError as ListUserLinksGatewayTimeoutError } from "./types/ListUserLinks/ListUserLinksError";

export const errors = {
    DeleteLinkError: {
        InvalidParameterError: DeleteLinkInvalidParameterError,
        UnauthorizedError: DeleteLinkUnauthorizedError,
        NotFoundError: DeleteLinkNotFoundError,
        InternalServerError: DeleteLinkInternalServerError,
        BadGatewayError: DeleteLinkBadGatewayError,
        GatewayTimeoutError: DeleteLinkGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    GetLinkError: {
        InvalidParameterError: GetLinkInvalidParameterError,
        UnauthorizedError: GetLinkUnauthorizedError,
        NotFoundError: GetLinkNotFoundError,
        InternalServerError: GetLinkInternalServerError,
        BadGatewayError: GetLinkBadGatewayError,
        GatewayTimeoutError: GetLinkGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    GetTargetError: {
        InvalidParameterError: GetTargetInvalidParameterError,
        UnauthorizedError: GetTargetUnauthorizedError,
        NotFoundError: GetTargetNotFoundError,
        InternalServerError: GetTargetInternalServerError,
        BadGatewayError: GetTargetBadGatewayError,
        GatewayTimeoutError: GetTargetGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    GetTeamLinkError: {
        InvalidParameterError: GetTeamLinkInvalidParameterError,
        UnauthorizedError: GetTeamLinkUnauthorizedError,
        NotFoundError: GetTeamLinkNotFoundError,
        InternalServerError: GetTeamLinkInternalServerError,
        BadGatewayError: GetTeamLinkBadGatewayError,
        GatewayTimeoutError: GetTeamLinkGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    GetUserLinkError: {
        InvalidParameterError: GetUserLinkInvalidParameterError,
        UnauthorizedError: GetUserLinkUnauthorizedError,
        NotFoundError: GetUserLinkNotFoundError,
        InternalServerError: GetUserLinkInternalServerError,
        BadGatewayError: GetUserLinkBadGatewayError,
        GatewayTimeoutError: GetUserLinkGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ListLinksError: {
        UnauthorizedError: ListLinksUnauthorizedError,
        InternalServerError: ListLinksInternalServerError,
        BadGatewayError: ListLinksBadGatewayError,
        GatewayTimeoutError: ListLinksGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ListTeamLinksError: {
        InvalidParameterError: ListTeamLinksInvalidParameterError,
        UnauthorizedError: ListTeamLinksUnauthorizedError,
        InternalServerError: ListTeamLinksInternalServerError,
        BadGatewayError: ListTeamLinksBadGatewayError,
        GatewayTimeoutError: ListTeamLinksGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ListUserLinksError: {
        InvalidParameterError: ListUserLinksInvalidParameterError,
        UnauthorizedError: ListUserLinksUnauthorizedError,
        InternalServerError: ListUserLinksInternalServerError,
        BadGatewayError: ListUserLinksBadGatewayError,
        GatewayTimeoutError: ListUserLinksGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    InvalidSdkConfigurationError,
    InvalidRegionOrHostError,
    InvalidRegionError,
    InvalidHostError,
};
