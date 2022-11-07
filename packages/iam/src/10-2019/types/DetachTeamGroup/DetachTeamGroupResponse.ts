import { DetachTeamGroupOutput } from "./DetachTeamGroup";
import { BadRequestError, NotFoundError } from "./DetachTeamGroupError";

export type DetachTeamGroupResponse = DetachTeamGroupOutput | BadRequestError | NotFoundError;
