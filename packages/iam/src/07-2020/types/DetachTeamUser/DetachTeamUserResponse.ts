import { DetachTeamUserOutput } from "./DetachTeamUser";
import { BadRequestError, NotFoundError } from "./DetachTeamUserError";

export type DetachTeamUserResponse = DetachTeamUserOutput | BadRequestError | NotFoundError;
