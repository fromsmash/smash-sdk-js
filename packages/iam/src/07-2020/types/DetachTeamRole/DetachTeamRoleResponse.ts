import { DetachTeamRoleOutput } from "./DetachTeamRole";
import { BadRequestError, NotFoundError } from "./DetachTeamRoleError";

export type DetachTeamRoleResponse = DetachTeamRoleOutput | BadRequestError | NotFoundError;
