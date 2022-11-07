import { DetachTeamGroupRoleOutput } from "./DetachTeamGroupRole";
import { BadRequestError, NotFoundError } from "./DetachTeamGroupRoleError";

export type DetachTeamGroupRoleResponse = DetachTeamGroupRoleOutput | BadRequestError | NotFoundError;
