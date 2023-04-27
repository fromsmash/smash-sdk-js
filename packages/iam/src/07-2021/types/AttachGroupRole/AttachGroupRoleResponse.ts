import { AttachGroupRoleOutput } from "./AttachGroupRole";
import { InvalidParameterError, NotFoundError, ConflictError } from "./AttachGroupRoleError";

export type AttachGroupRoleResponse = AttachGroupRoleOutput | InvalidParameterError | NotFoundError | ConflictError;
