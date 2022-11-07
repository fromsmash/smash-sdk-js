import { ListUserTeamsOutput } from "./ListUserTeams";
import { BadRequestError, NotFoundError } from "./ListUserTeamsError";

export type ListUserTeamsResponse = ListUserTeamsOutput | BadRequestError | NotFoundError;
