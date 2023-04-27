import { DetachTeamUserRoleOutput } from "./DetachTeamUserRole";
import { InvalidParameterError, NotFoundError } from "./DetachTeamUserRoleError";

export type DetachTeamUserRoleResponse = DetachTeamUserRoleOutput | InvalidParameterError | NotFoundError;
