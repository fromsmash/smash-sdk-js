import { CreateProviderOutput } from "./CreateProvider";
import { InvalidParameterError, ConflictError } from "./CreateProviderError";

export type CreateProviderResponse = CreateProviderOutput | InvalidParameterError | ConflictError;
