import { UnknownError, NetworkError, InvalidSdkConfigurationError, InvalidRegionOrHostError, InvalidRegionError, InvalidHostError } from "@smash-sdk/core";
import { InvalidParameterError as CreateEmailChallengeInvalidParameterError } from "./types/CreateEmailChallenge/CreateEmailChallengeError";
import { UnauthorizedError as CreateEmailChallengeUnauthorizedError } from "./types/CreateEmailChallenge/CreateEmailChallengeError";
import { NotificationAlreadySentError as CreateEmailChallengeNotificationAlreadySentError } from "./types/CreateEmailChallenge/CreateEmailChallengeError";
import { ChallengeAlreadyExistError as CreateEmailChallengeChallengeAlreadyExistError } from "./types/CreateEmailChallenge/CreateEmailChallengeError";
import { InternalServerError as CreateEmailChallengeInternalServerError } from "./types/CreateEmailChallenge/CreateEmailChallengeError";
import { BadGatewayError as CreateEmailChallengeBadGatewayError } from "./types/CreateEmailChallenge/CreateEmailChallengeError";
import { GatewayTimeoutError as CreateEmailChallengeGatewayTimeoutError } from "./types/CreateEmailChallenge/CreateEmailChallengeError";
import { InvalidParameterError as GetEmailChallengeInvalidParameterError } from "./types/GetEmailChallenge/GetEmailChallengeError";
import { UnauthorizedError as GetEmailChallengeUnauthorizedError } from "./types/GetEmailChallenge/GetEmailChallengeError";
import { NotFoundError as GetEmailChallengeNotFoundError } from "./types/GetEmailChallenge/GetEmailChallengeError";
import { InternalServerError as GetEmailChallengeInternalServerError } from "./types/GetEmailChallenge/GetEmailChallengeError";
import { BadGatewayError as GetEmailChallengeBadGatewayError } from "./types/GetEmailChallenge/GetEmailChallengeError";
import { GatewayTimeoutError as GetEmailChallengeGatewayTimeoutError } from "./types/GetEmailChallenge/GetEmailChallengeError";
import { InvalidParameterError as UpdateEmailChallengeInvalidParameterError } from "./types/UpdateEmailChallenge/UpdateEmailChallengeError";
import { UnauthorizedError as UpdateEmailChallengeUnauthorizedError } from "./types/UpdateEmailChallenge/UpdateEmailChallengeError";
import { InvalidTokenError as UpdateEmailChallengeInvalidTokenError } from "./types/UpdateEmailChallenge/UpdateEmailChallengeError";
import { InternalServerError as UpdateEmailChallengeInternalServerError } from "./types/UpdateEmailChallenge/UpdateEmailChallengeError";
import { BadGatewayError as UpdateEmailChallengeBadGatewayError } from "./types/UpdateEmailChallenge/UpdateEmailChallengeError";
import { GatewayTimeoutError as UpdateEmailChallengeGatewayTimeoutError } from "./types/UpdateEmailChallenge/UpdateEmailChallengeError";

export const errors = {
    CreateEmailChallengeError: {
        InvalidParameterError: CreateEmailChallengeInvalidParameterError,
        UnauthorizedError: CreateEmailChallengeUnauthorizedError,
        NotificationAlreadySentError: CreateEmailChallengeNotificationAlreadySentError,
        ChallengeAlreadyExistError: CreateEmailChallengeChallengeAlreadyExistError,
        InternalServerError: CreateEmailChallengeInternalServerError,
        BadGatewayError: CreateEmailChallengeBadGatewayError,
        GatewayTimeoutError: CreateEmailChallengeGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    GetEmailChallengeError: {
        InvalidParameterError: GetEmailChallengeInvalidParameterError,
        UnauthorizedError: GetEmailChallengeUnauthorizedError,
        NotFoundError: GetEmailChallengeNotFoundError,
        InternalServerError: GetEmailChallengeInternalServerError,
        BadGatewayError: GetEmailChallengeBadGatewayError,
        GatewayTimeoutError: GetEmailChallengeGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    UpdateEmailChallengeError: {
        InvalidParameterError: UpdateEmailChallengeInvalidParameterError,
        UnauthorizedError: UpdateEmailChallengeUnauthorizedError,
        InvalidTokenError: UpdateEmailChallengeInvalidTokenError,
        InternalServerError: UpdateEmailChallengeInternalServerError,
        BadGatewayError: UpdateEmailChallengeBadGatewayError,
        GatewayTimeoutError: UpdateEmailChallengeGatewayTimeoutError,
        UnknownError,
        NetworkError,
    },
    InvalidSdkConfigurationError,
    InvalidRegionOrHostError,
    InvalidRegionError,
    InvalidHostError,
};
