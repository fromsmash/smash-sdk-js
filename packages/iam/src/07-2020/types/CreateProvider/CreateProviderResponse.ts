import { CreateProviderOutput } from "./CreateProvider";
import { InvalidParameterError, InvalidCertificateError, ConflictError } from "./CreateProviderError";

export type CreateProviderResponse = CreateProviderOutput | InvalidParameterError | InvalidCertificateError | ConflictError;
