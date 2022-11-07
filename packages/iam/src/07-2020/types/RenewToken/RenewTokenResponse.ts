import { RenewTokenOutput } from "./RenewToken";
import { BadRequestError, PasswordRevokedError, IdentityDisabledError, NotAllowedError, InvalidRefreshTokenError } from "./RenewTokenError";

export type RenewTokenResponse = RenewTokenOutput | BadRequestError | PasswordRevokedError | IdentityDisabledError | NotAllowedError | InvalidRefreshTokenError;
