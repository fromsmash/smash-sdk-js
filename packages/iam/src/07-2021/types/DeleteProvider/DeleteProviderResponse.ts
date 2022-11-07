import { DeleteProviderOutput } from "./DeleteProvider";
import { BadRequestError, NotFoundError } from "./DeleteProviderError";

export type DeleteProviderResponse = DeleteProviderOutput | BadRequestError | NotFoundError;
