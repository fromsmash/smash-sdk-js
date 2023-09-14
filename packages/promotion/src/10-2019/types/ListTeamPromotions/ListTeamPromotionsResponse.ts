import { ListTeamPromotionsOutput } from "./ListTeamPromotions";
import { InvalidParameterError, NotFoundError } from "./ListTeamPromotionsError";

export type ListTeamPromotionsResponse = ListTeamPromotionsOutput | InvalidParameterError | NotFoundError;
