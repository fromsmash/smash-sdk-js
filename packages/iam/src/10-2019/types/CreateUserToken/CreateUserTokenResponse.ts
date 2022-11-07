import { CreateUserTokenOutput } from "./CreateUserToken";
import { BadRequestError, IdentityDisabledError, ConflictError } from "./CreateUserTokenError";

export type CreateUserTokenResponse = CreateUserTokenOutput | BadRequestError | IdentityDisabledError | ConflictError;
