import { GetProviderOutput } from "./GetProvider";
import { InvalidParameterError, NotFoundError } from "./GetProviderError";

export type GetProviderResponse = GetProviderOutput | InvalidParameterError | NotFoundError;
