import { DeleteProviderOutput } from "./DeleteProvider";
import { InvalidParameterError, NotFoundError } from "./DeleteProviderError";

export type DeleteProviderResponse = DeleteProviderOutput | InvalidParameterError | NotFoundError;
