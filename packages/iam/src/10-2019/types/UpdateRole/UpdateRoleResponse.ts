import { UpdateRoleOutput } from "./UpdateRole";
import { BadRequestError, NotFoundError } from "./UpdateRoleError";

export type UpdateRoleResponse = UpdateRoleOutput | BadRequestError | NotFoundError;
