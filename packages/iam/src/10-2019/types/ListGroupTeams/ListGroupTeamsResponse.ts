import { ListGroupTeamsOutput } from "./ListGroupTeams";
import { InvalidParameterError, NotFoundError } from "./ListGroupTeamsError";

export type ListGroupTeamsResponse = ListGroupTeamsOutput | InvalidParameterError | NotFoundError;
