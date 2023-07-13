import { UpdateProviderOutput } from "./UpdateProvider";
import { InvalidParameterError, NotFoundError, InvalidCertificateError } from "./UpdateProviderError";

export type UpdateProviderResponse = UpdateProviderOutput | InvalidParameterError | NotFoundError | InvalidCertificateError;
