import { UpdateAccountOutput } from "./UpdateAccount";
import { InvalidParameterError, NotFoundError, ForbiddenError, ConflictError } from "./UpdateAccountError";

export type UpdateAccountResponse = UpdateAccountOutput | InvalidParameterError | NotFoundError | ForbiddenError | ConflictError;
