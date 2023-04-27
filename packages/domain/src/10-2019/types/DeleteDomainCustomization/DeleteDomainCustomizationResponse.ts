import { DeleteDomainCustomizationOutput } from "./DeleteDomainCustomization";
import { InvalidParameterError, NotFoundError } from "./DeleteDomainCustomizationError";

export type DeleteDomainCustomizationResponse = DeleteDomainCustomizationOutput | InvalidParameterError | NotFoundError;
