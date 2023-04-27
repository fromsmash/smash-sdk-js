import { DetachTeamGroupRoleOutput } from "./DetachTeamGroupRole";
import { InvalidParameterError, NotFoundError } from "./DetachTeamGroupRoleError";

export type DetachTeamGroupRoleResponse = DetachTeamGroupRoleOutput | InvalidParameterError | NotFoundError;
