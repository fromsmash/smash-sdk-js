import { ListGroupTeamsOutput } from "./ListGroupTeams";
import { BadRequestError, NotFoundError } from "./ListGroupTeamsError";

export type ListGroupTeamsResponse = ListGroupTeamsOutput | BadRequestError | NotFoundError;
