import { ListTeamsOutput } from "./ListTeams";
import { BadRequestError } from "./ListTeamsError";

export type ListTeamsResponse = ListTeamsOutput | BadRequestError;
