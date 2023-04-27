import { DetachTeamRoleOutput } from "./DetachTeamRole";
import { InvalidParameterError, NotFoundError } from "./DetachTeamRoleError";

export type DetachTeamRoleResponse = DetachTeamRoleOutput | InvalidParameterError | NotFoundError;
