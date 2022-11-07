import { AttachTeamGroupUserOutput } from "./AttachTeamGroupUser";
import { BadRequestError, NotFoundError } from "./AttachTeamGroupUserError";

export type AttachTeamGroupUserResponse = AttachTeamGroupUserOutput | BadRequestError | NotFoundError;
