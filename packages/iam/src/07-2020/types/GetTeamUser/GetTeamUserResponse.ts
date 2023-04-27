import { GetTeamUserOutput } from "./GetTeamUser";
import { InvalidParameterError, NotFoundError } from "./GetTeamUserError";

export type GetTeamUserResponse = GetTeamUserOutput | InvalidParameterError | NotFoundError;
