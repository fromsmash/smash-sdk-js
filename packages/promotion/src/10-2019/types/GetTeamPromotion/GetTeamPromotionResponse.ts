import { GetTeamPromotionOutput } from "./GetTeamPromotion";
import { InvalidParameterError, NotFoundError } from "./GetTeamPromotionError";

export type GetTeamPromotionResponse = GetTeamPromotionOutput | InvalidParameterError | NotFoundError;
