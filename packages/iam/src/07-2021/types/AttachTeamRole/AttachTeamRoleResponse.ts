import { AttachTeamRoleOutput } from "./AttachTeamRole";
import { InvalidParameterError, NotFoundError, ConflictError } from "./AttachTeamRoleError";

export type AttachTeamRoleResponse = AttachTeamRoleOutput | InvalidParameterError | NotFoundError | ConflictError;
