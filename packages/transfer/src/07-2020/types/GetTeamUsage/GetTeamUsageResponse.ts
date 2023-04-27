import { GetTeamUsageOutput } from "./GetTeamUsage";
import { InvalidParameterError } from "./GetTeamUsageError";

export type GetTeamUsageResponse = GetTeamUsageOutput | InvalidParameterError;
