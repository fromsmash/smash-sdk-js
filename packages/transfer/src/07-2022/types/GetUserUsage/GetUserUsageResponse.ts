import { GetUserUsageOutput } from "./GetUserUsage";
import { InvalidParameterError } from "./GetUserUsageError";

export type GetUserUsageResponse = GetUserUsageOutput | InvalidParameterError;
