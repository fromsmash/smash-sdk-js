import { GetTeamMetricStatisticOutput } from "./GetTeamMetricStatistic";
import { InvalidParameterError } from "./GetTeamMetricStatisticError";

export type GetTeamMetricStatisticResponse = GetTeamMetricStatisticOutput | InvalidParameterError;
