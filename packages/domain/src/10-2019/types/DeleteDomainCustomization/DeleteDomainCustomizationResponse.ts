import { DeleteDomainCustomizationOutput } from "./DeleteDomainCustomization";
import { BadRequestError, NotFoundError } from "./DeleteDomainCustomizationError";

export type DeleteDomainCustomizationResponse = DeleteDomainCustomizationOutput | BadRequestError | NotFoundError;
