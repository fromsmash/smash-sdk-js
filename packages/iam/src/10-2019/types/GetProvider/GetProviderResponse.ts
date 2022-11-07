import { GetProviderOutput } from "./GetProvider";
import { BadRequestError, NotFoundError } from "./GetProviderError";

export type GetProviderResponse = GetProviderOutput | BadRequestError | NotFoundError;
