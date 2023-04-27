import { AttachTeamUserRoleOutput } from "./AttachTeamUserRole";
import { InvalidParameterError, NotFoundError, ConflictError } from "./AttachTeamUserRoleError";

export type AttachTeamUserRoleResponse = AttachTeamUserRoleOutput | InvalidParameterError | NotFoundError | ConflictError;
