import { ListUserTeamsOutput } from "./ListUserTeams";
import { InvalidParameterError, NotFoundError } from "./ListUserTeamsError";

export type ListUserTeamsResponse = ListUserTeamsOutput | InvalidParameterError | NotFoundError;
