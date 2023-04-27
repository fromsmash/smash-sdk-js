import { DeleteRoleOutput } from "./DeleteRole";
import { InvalidParameterError, NotFoundError, ForbiddenError } from "./DeleteRoleError";

export type DeleteRoleResponse = DeleteRoleOutput | InvalidParameterError | NotFoundError | ForbiddenError;
