import { DetachTeamUserRoleOutput } from "./DetachTeamUserRole";
import { BadRequestError, NotFoundError } from "./DetachTeamUserRoleError";

export type DetachTeamUserRoleResponse = DetachTeamUserRoleOutput | BadRequestError | NotFoundError;
