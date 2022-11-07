import { AttachTeamUserRoleOutput } from "./AttachTeamUserRole";
import { BadRequestError, NotFoundError } from "./AttachTeamUserRoleError";

export type AttachTeamUserRoleResponse = AttachTeamUserRoleOutput | BadRequestError | NotFoundError;
