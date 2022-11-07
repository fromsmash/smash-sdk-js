import { AttachTeamGroupOutput } from "./AttachTeamGroup";
import { BadRequestError, NotFoundError } from "./AttachTeamGroupError";

export type AttachTeamGroupResponse = AttachTeamGroupOutput | BadRequestError | NotFoundError;
