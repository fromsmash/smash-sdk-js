import { GetTeamUserMetricStatisticOutput } from "./GetTeamUserMetricStatistic";
import { BadRequestError } from "./GetTeamUserMetricStatisticError";

export type GetTeamUserMetricStatisticResponse = GetTeamUserMetricStatisticOutput | BadRequestError;
