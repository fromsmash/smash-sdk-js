import { GetTeamGroupOutput } from "./GetTeamGroup";
import { InvalidParameterError, NotFoundError } from "./GetTeamGroupError";

export type GetTeamGroupResponse = GetTeamGroupOutput | InvalidParameterError | NotFoundError;
