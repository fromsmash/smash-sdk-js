import { CreateTokenOutput } from "./CreateToken";
import { BadRequestError, NotFoundError, BadCredentialsError, PasswordRevokedError, IdentityDisabledError, WrongAuthError, ConflictError } from "./CreateTokenError";

export type CreateTokenResponse = CreateTokenOutput | BadRequestError | NotFoundError | BadCredentialsError | PasswordRevokedError | IdentityDisabledError | WrongAuthError | ConflictError;
