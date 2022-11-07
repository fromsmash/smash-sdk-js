import { UpdateTransferCustomizationOutput } from "./UpdateTransferCustomization";
import { BadRequestError, NotFoundError } from "./UpdateTransferCustomizationError";

export type UpdateTransferCustomizationResponse = UpdateTransferCustomizationOutput | BadRequestError | NotFoundError;
