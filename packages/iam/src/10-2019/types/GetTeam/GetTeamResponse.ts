import { GetTeamOutput } from "./GetTeam";
import { BadRequestError, NotFoundError } from "./GetTeamError";

export type GetTeamResponse = GetTeamOutput | BadRequestError | NotFoundError;
