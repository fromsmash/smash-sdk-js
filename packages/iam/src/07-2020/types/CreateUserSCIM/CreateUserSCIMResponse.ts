import { CreateUserSCIMOutput } from "./CreateUserSCIM";
import { BadRequestError, ConflictError } from "./CreateUserSCIMError";

export type CreateUserSCIMResponse = CreateUserSCIMOutput | BadRequestError | ConflictError;
