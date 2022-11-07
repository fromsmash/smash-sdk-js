import { GetUserMetricStatisticOutput } from "./GetUserMetricStatistic";
import { BadRequestError } from "./GetUserMetricStatisticError";

export type GetUserMetricStatisticResponse = GetUserMetricStatisticOutput | BadRequestError;
