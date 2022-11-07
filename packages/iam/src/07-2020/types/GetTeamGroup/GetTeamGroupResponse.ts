import { GetTeamGroupOutput } from "./GetTeamGroup";
import { BadRequestError, NotFoundError } from "./GetTeamGroupError";

export type GetTeamGroupResponse = GetTeamGroupOutput | BadRequestError | NotFoundError;
