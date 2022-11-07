import { DeleteUserOutput } from "./DeleteUser";
import { BadRequestError, NotFoundError, ForbiddenHasUserError, ForbiddenHasRoleError, ForbiddenHasGroupError } from "./DeleteUserError";

export type DeleteUserResponse = DeleteUserOutput | BadRequestError | NotFoundError | ForbiddenHasUserError | ForbiddenHasRoleError | ForbiddenHasGroupError;
