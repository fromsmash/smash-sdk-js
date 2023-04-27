import { CreateRoleOutput } from "./CreateRole";
import { InvalidParameterError, ConflictError } from "./CreateRoleError";

export type CreateRoleResponse = CreateRoleOutput | InvalidParameterError | ConflictError;
