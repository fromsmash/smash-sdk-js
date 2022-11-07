import { CreateProviderOutput } from "./CreateProvider";
import { BadRequestError, ConflictError } from "./CreateProviderError";

export type CreateProviderResponse = CreateProviderOutput | BadRequestError | ConflictError;
