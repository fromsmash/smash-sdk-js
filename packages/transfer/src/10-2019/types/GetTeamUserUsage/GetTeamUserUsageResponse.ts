import { GetTeamUserUsageOutput } from "./GetTeamUserUsage";
import { InvalidParameterError } from "./GetTeamUserUsageError";

export type GetTeamUserUsageResponse = GetTeamUserUsageOutput | InvalidParameterError;
