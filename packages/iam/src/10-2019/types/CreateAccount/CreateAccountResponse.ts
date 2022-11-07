import { CreateAccountOutput } from "./CreateAccount";
import { BadRequestError, ConflictError } from "./CreateAccountError";

export type CreateAccountResponse = CreateAccountOutput | BadRequestError | ConflictError;
