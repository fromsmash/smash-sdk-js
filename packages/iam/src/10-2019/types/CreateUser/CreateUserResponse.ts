import { CreateUserOutput } from "./CreateUser";
import { BadRequestError, ForbiddenError, ConflictError } from "./CreateUserError";

export type CreateUserResponse = CreateUserOutput | BadRequestError | ForbiddenError | ConflictError;
