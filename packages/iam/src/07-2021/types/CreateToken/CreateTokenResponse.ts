import { CreateTokenOutput } from "./CreateToken";
import { InvalidParameterError, NotFoundError, InvalidCredentialsError, PasswordRevokedError, IdentityDisabledError, InvalidAuthenticationModeError, ConflictError } from "./CreateTokenError";

export type CreateTokenResponse = CreateTokenOutput | InvalidParameterError | NotFoundError | InvalidCredentialsError | PasswordRevokedError | IdentityDisabledError | InvalidAuthenticationModeError | ConflictError;
