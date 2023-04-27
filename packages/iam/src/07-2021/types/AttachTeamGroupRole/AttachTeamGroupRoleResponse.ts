import { AttachTeamGroupRoleOutput } from "./AttachTeamGroupRole";
import { InvalidParameterError, NotFoundError, ConflictError } from "./AttachTeamGroupRoleError";

export type AttachTeamGroupRoleResponse = AttachTeamGroupRoleOutput | InvalidParameterError | NotFoundError | ConflictError;
