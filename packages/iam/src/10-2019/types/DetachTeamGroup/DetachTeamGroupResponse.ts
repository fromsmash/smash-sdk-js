import { DetachTeamGroupOutput } from "./DetachTeamGroup";
import { InvalidParameterError, NotFoundError } from "./DetachTeamGroupError";

export type DetachTeamGroupResponse = DetachTeamGroupOutput | InvalidParameterError | NotFoundError;
