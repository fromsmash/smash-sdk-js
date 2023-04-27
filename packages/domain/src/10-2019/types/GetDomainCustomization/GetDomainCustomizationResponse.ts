import { GetDomainCustomizationOutput } from "./GetDomainCustomization";
import { InvalidParameterError, NotFoundError } from "./GetDomainCustomizationError";

export type GetDomainCustomizationResponse = GetDomainCustomizationOutput | InvalidParameterError | NotFoundError;
