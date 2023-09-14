import { UnknownError, NetworkError, InvalidSdkConfigurationError, InvalidRegionOrHostError, InvalidRegionError, InvalidHostError } from "@smash-sdk/core";
import { InvalidParameterError as GetTeamPromotionInvalidParameterError } from "./types/GetTeamPromotion/GetTeamPromotionError";
import { UnauthorizedError as GetTeamPromotionUnauthorizedError } from "./types/GetTeamPromotion/GetTeamPromotionError";
import { NotFoundError as GetTeamPromotionNotFoundError } from "./types/GetTeamPromotion/GetTeamPromotionError";
import { InternalServerError as GetTeamPromotionInternalServerError } from "./types/GetTeamPromotion/GetTeamPromotionError";
import { BadGatewayError as GetTeamPromotionBadGatewayError } from "./types/GetTeamPromotion/GetTeamPromotionError";
import { GatewayTimeoutError as GetTeamPromotionGatewayTimeoutError } from "./types/GetTeamPromotion/GetTeamPromotionError";
import { InvalidParameterError as ListTeamPromotionsInvalidParameterError } from "./types/ListTeamPromotions/ListTeamPromotionsError";
import { UnauthorizedError as ListTeamPromotionsUnauthorizedError } from "./types/ListTeamPromotions/ListTeamPromotionsError";
import { NotFoundError as ListTeamPromotionsNotFoundError } from "./types/ListTeamPromotions/ListTeamPromotionsError";
import { InternalServerError as ListTeamPromotionsInternalServerError } from "./types/ListTeamPromotions/ListTeamPromotionsError";
import { BadGatewayError as ListTeamPromotionsBadGatewayError } from "./types/ListTeamPromotions/ListTeamPromotionsError";
import { GatewayTimeoutError as ListTeamPromotionsGatewayTimeoutError } from "./types/ListTeamPromotions/ListTeamPromotionsError";
import { InvalidParameterError as ListTeamPromotionsExternalInvalidParameterError } from "./types/ListTeamPromotionsExternal/ListTeamPromotionsExternalError";
import { UnauthorizedError as ListTeamPromotionsExternalUnauthorizedError } from "./types/ListTeamPromotionsExternal/ListTeamPromotionsExternalError";
import { NotFoundError as ListTeamPromotionsExternalNotFoundError } from "./types/ListTeamPromotionsExternal/ListTeamPromotionsExternalError";
import { InternalServerError as ListTeamPromotionsExternalInternalServerError } from "./types/ListTeamPromotionsExternal/ListTeamPromotionsExternalError";
import { BadGatewayError as ListTeamPromotionsExternalBadGatewayError } from "./types/ListTeamPromotionsExternal/ListTeamPromotionsExternalError";
import { GatewayTimeoutError as ListTeamPromotionsExternalGatewayTimeoutError } from "./types/ListTeamPromotionsExternal/ListTeamPromotionsExternalError";

export const errors = {
    GetTeamPromotionError: {
        InvalidParameterError: GetTeamPromotionInvalidParameterError,
        UnauthorizedError: GetTeamPromotionUnauthorizedError,
        NotFoundError: GetTeamPromotionNotFoundError,
        InternalServerError: GetTeamPromotionInternalServerError,
        BadGatewayError: GetTeamPromotionBadGatewayError,
        GatewayTimeoutError: GetTeamPromotionGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ListTeamPromotionsError: {
        InvalidParameterError: ListTeamPromotionsInvalidParameterError,
        UnauthorizedError: ListTeamPromotionsUnauthorizedError,
        NotFoundError: ListTeamPromotionsNotFoundError,
        InternalServerError: ListTeamPromotionsInternalServerError,
        BadGatewayError: ListTeamPromotionsBadGatewayError,
        GatewayTimeoutError: ListTeamPromotionsGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    ListTeamPromotionsExternalError: {
        InvalidParameterError: ListTeamPromotionsExternalInvalidParameterError,
        UnauthorizedError: ListTeamPromotionsExternalUnauthorizedError,
        NotFoundError: ListTeamPromotionsExternalNotFoundError,
        InternalServerError: ListTeamPromotionsExternalInternalServerError,
        BadGatewayError: ListTeamPromotionsExternalBadGatewayError,
        GatewayTimeoutError: ListTeamPromotionsExternalGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    InvalidSdkConfigurationError,
    InvalidRegionOrHostError,
    InvalidRegionError,
    InvalidHostError,
};
