import { DetachTeamGroupUserOutput } from "./DetachTeamGroupUser";
import { InvalidParameterError, NotFoundError } from "./DetachTeamGroupUserError";

export type DetachTeamGroupUserResponse = DetachTeamGroupUserOutput | InvalidParameterError | NotFoundError;
