import { AttachTeamGroupUserOutput } from "./AttachTeamGroupUser";
import { InvalidParameterError, NotFoundError, ConflictError } from "./AttachTeamGroupUserError";

export type AttachTeamGroupUserResponse = AttachTeamGroupUserOutput | InvalidParameterError | NotFoundError | ConflictError;
