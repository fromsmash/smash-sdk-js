import { AttachTeamUserOutput } from "./AttachTeamUser";
import { InvalidParameterError, NotFoundError, ConflictError } from "./AttachTeamUserError";

export type AttachTeamUserResponse = AttachTeamUserOutput | InvalidParameterError | NotFoundError | ConflictError;
