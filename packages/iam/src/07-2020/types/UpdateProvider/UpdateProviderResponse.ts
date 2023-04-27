import { UpdateProviderOutput } from "./UpdateProvider";
import { InvalidParameterError, NotFoundError } from "./UpdateProviderError";

export type UpdateProviderResponse = UpdateProviderOutput | InvalidParameterError | NotFoundError;
