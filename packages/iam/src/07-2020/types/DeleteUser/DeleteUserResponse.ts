import { DeleteUserOutput } from "./DeleteUser";
import { InvalidParameterError, NotFoundError, ForbiddenError } from "./DeleteUserError";

export type DeleteUserResponse = DeleteUserOutput | InvalidParameterError | NotFoundError | ForbiddenError;
