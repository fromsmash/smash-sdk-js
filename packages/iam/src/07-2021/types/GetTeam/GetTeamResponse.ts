import { GetTeamOutput } from "./GetTeam";
import { InvalidParameterError, NotFoundError } from "./GetTeamError";

export type GetTeamResponse = GetTeamOutput | InvalidParameterError | NotFoundError;
