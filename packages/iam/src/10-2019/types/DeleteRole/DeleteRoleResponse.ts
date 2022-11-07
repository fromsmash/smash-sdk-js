import { DeleteRoleOutput } from "./DeleteRole";
import { BadRequestError, NotFoundError } from "./DeleteRoleError";

export type DeleteRoleResponse = DeleteRoleOutput | BadRequestError | NotFoundError;
