import { GetMetricStatisticOutput } from "./GetMetricStatistic";
import { BadRequestError } from "./GetMetricStatisticError";

export type GetMetricStatisticResponse = GetMetricStatisticOutput | BadRequestError;
