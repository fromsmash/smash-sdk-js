import { CreateAccountOutput } from "./CreateAccount";
import { InvalidParameterError, ConflictError } from "./CreateAccountError";

export type CreateAccountResponse = CreateAccountOutput | InvalidParameterError | ConflictError;
