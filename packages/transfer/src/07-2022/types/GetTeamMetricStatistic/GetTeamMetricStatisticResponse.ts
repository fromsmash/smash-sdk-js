import { GetTeamMetricStatisticOutput } from "./GetTeamMetricStatistic";
import { BadRequestError } from "./GetTeamMetricStatisticError";

export type GetTeamMetricStatisticResponse = GetTeamMetricStatisticOutput | BadRequestError;
