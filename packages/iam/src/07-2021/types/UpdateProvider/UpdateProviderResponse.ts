import { UpdateProviderOutput } from "./UpdateProvider";
import { BadRequestError, NotFoundError } from "./UpdateProviderError";

export type UpdateProviderResponse = UpdateProviderOutput | BadRequestError | NotFoundError;
