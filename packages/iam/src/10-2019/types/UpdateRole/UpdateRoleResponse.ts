import { UpdateRoleOutput } from "./UpdateRole";
import { InvalidParameterError, NotFoundError } from "./UpdateRoleError";

export type UpdateRoleResponse = UpdateRoleOutput | InvalidParameterError | NotFoundError;
