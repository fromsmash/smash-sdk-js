import { AttachTeamGroupRoleOutput } from "./AttachTeamGroupRole";
import { BadRequestError, NotFoundError } from "./AttachTeamGroupRoleError";

export type AttachTeamGroupRoleResponse = AttachTeamGroupRoleOutput | BadRequestError | NotFoundError;
