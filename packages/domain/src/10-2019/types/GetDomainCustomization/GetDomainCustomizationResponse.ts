import { GetDomainCustomizationOutput } from "./GetDomainCustomization";
import { BadRequestError, NotFoundError } from "./GetDomainCustomizationError";

export type GetDomainCustomizationResponse = GetDomainCustomizationOutput | BadRequestError | NotFoundError;
