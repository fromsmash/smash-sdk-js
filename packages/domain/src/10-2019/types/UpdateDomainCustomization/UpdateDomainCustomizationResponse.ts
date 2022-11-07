import { UpdateDomainCustomizationOutput } from "./UpdateDomainCustomization";
import { BadRequestError, NotFoundError } from "./UpdateDomainCustomizationError";

export type UpdateDomainCustomizationResponse = UpdateDomainCustomizationOutput | BadRequestError | NotFoundError;
