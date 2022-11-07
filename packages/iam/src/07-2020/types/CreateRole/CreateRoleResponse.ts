import { CreateRoleOutput } from "./CreateRole";
import { BadRequestError, ConflictError } from "./CreateRoleError";

export type CreateRoleResponse = CreateRoleOutput | BadRequestError | ConflictError;
