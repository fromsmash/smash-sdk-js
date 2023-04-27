import { RenewTokenOutput } from "./RenewToken";
import { InvalidParameterError, NotFoundError, PasswordRevokedError, IdentityDisabledError, NotAllowedError, InvalidRefreshTokenError } from "./RenewTokenError";

export type RenewTokenResponse = RenewTokenOutput | InvalidParameterError | NotFoundError | PasswordRevokedError | IdentityDisabledError | NotAllowedError | InvalidRefreshTokenError;
