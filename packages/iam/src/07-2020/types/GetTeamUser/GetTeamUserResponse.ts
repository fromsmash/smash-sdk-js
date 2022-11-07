import { GetTeamUserOutput } from "./GetTeamUser";
import { BadRequestError, NotFoundError } from "./GetTeamUserError";

export type GetTeamUserResponse = GetTeamUserOutput | BadRequestError | NotFoundError;
