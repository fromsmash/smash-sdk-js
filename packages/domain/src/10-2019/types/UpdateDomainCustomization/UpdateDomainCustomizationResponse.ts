import { UpdateDomainCustomizationOutput } from "./UpdateDomainCustomization";
import { InvalidParameterError, NotFoundError } from "./UpdateDomainCustomizationError";

export type UpdateDomainCustomizationResponse = UpdateDomainCustomizationOutput | InvalidParameterError | NotFoundError;
