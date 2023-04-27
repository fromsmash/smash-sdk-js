import { GetMetricStatisticOutput } from "./GetMetricStatistic";
import { InvalidParameterError } from "./GetMetricStatisticError";

export type GetMetricStatisticResponse = GetMetricStatisticOutput | InvalidParameterError;
