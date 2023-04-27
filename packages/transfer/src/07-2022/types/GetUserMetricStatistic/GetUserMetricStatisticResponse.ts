import { GetUserMetricStatisticOutput } from "./GetUserMetricStatistic";
import { InvalidParameterError } from "./GetUserMetricStatisticError";

export type GetUserMetricStatisticResponse = GetUserMetricStatisticOutput | InvalidParameterError;
