import { CreateUserTokenOutput } from "./CreateUserToken";
import { InvalidParameterError, NotFoundError, IdentityDisabledError, ConflictError } from "./CreateUserTokenError";

export type CreateUserTokenResponse = CreateUserTokenOutput | InvalidParameterError | NotFoundError | IdentityDisabledError | ConflictError;
