import { AttachTeamRoleOutput } from "./AttachTeamRole";
import { BadRequestError, NotFoundError, ConflictError } from "./AttachTeamRoleError";

export type AttachTeamRoleResponse = AttachTeamRoleOutput | BadRequestError | NotFoundError | ConflictError;
