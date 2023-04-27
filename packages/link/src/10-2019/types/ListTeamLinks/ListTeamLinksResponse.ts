import { ListTeamLinksOutput } from "./ListTeamLinks";
import { InvalidParameterError } from "./ListTeamLinksError";

export type ListTeamLinksResponse = ListTeamLinksOutput | InvalidParameterError;
