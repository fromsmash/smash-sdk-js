import { UpdateAccountOutput } from "./UpdateAccount";
import { BadRequestError, ConflictError } from "./UpdateAccountError";

export type UpdateAccountResponse = UpdateAccountOutput | BadRequestError | ConflictError;
