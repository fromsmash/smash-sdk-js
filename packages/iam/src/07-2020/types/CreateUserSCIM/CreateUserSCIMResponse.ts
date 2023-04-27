import { CreateUserSCIMOutput } from "./CreateUserSCIM";
import { InvalidParameterError, NotFoundError, ConflictError } from "./CreateUserSCIMError";

export type CreateUserSCIMResponse = CreateUserSCIMOutput | InvalidParameterError | NotFoundError | ConflictError;
