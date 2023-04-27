import { CreateTokenOutput } from "./CreateToken";
import { InvalidParameterError, NotFoundError, BadCredentialsError, PasswordRevokedError, IdentityDisabledError, WrongAuthError, ConflictError } from "./CreateTokenError";

export type CreateTokenResponse = CreateTokenOutput | InvalidParameterError | NotFoundError | BadCredentialsError | PasswordRevokedError | IdentityDisabledError | WrongAuthError | ConflictError;
