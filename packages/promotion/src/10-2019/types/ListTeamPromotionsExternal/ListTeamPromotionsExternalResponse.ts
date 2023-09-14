import { ListTeamPromotionsExternalOutput } from "./ListTeamPromotionsExternal";
import { InvalidParameterError, NotFoundError } from "./ListTeamPromotionsExternalError";

export type ListTeamPromotionsExternalResponse = ListTeamPromotionsExternalOutput | InvalidParameterError | NotFoundError;
