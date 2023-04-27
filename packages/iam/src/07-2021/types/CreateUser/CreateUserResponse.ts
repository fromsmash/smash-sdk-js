import { CreateUserOutput } from "./CreateUser";
import { InvalidParameterError, ForbiddenError, ConflictError } from "./CreateUserError";

export type CreateUserResponse = CreateUserOutput | InvalidParameterError | ForbiddenError | ConflictError;
