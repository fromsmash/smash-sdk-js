import { DetachTeamUserOutput } from "./DetachTeamUser";
import { InvalidParameterError, NotFoundError } from "./DetachTeamUserError";

export type DetachTeamUserResponse = DetachTeamUserOutput | InvalidParameterError | NotFoundError;
