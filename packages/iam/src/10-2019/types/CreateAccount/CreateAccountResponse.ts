import { CreateAccountOutput } from "./CreateAccount";
import { InvalidParameterError, NotFoundError, ConflictError } from "./CreateAccountError";

export type CreateAccountResponse = CreateAccountOutput | InvalidParameterError | NotFoundError | ConflictError;
