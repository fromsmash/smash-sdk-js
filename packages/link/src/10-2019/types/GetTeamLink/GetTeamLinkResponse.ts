import { GetTeamLinkOutput } from "./GetTeamLink";
import { InvalidParameterError, NotFoundError } from "./GetTeamLinkError";

export type GetTeamLinkResponse = GetTeamLinkOutput | InvalidParameterError | NotFoundError;
