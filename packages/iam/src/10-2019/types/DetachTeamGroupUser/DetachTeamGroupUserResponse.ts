import { DetachTeamGroupUserOutput } from "./DetachTeamGroupUser";
import { BadRequestError, NotFoundError } from "./DetachTeamGroupUserError";

export type DetachTeamGroupUserResponse = DetachTeamGroupUserOutput | BadRequestError | NotFoundError;
