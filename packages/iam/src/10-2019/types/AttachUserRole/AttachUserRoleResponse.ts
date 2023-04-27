import { AttachUserRoleOutput } from "./AttachUserRole";
import { InvalidParameterError, NotFoundError, ConflictError } from "./AttachUserRoleError";

export type AttachUserRoleResponse = AttachUserRoleOutput | InvalidParameterError | NotFoundError | ConflictError;
