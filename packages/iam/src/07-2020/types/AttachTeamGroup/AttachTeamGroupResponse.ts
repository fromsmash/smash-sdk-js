import { AttachTeamGroupOutput } from "./AttachTeamGroup";
import { InvalidParameterError, NotFoundError, ConflictError } from "./AttachTeamGroupError";

export type AttachTeamGroupResponse = AttachTeamGroupOutput | InvalidParameterError | NotFoundError | ConflictError;
