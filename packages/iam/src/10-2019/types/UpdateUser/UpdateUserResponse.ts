import { UpdateUserOutput } from "./UpdateUser";
import { InvalidParameterError, NotFoundError, ForbiddenError } from "./UpdateUserError";

export type UpdateUserResponse = UpdateUserOutput | InvalidParameterError | NotFoundError | ForbiddenError;
