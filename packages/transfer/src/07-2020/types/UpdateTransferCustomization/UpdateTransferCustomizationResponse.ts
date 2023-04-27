import { UpdateTransferCustomizationOutput } from "./UpdateTransferCustomization";
import { InvalidParameterError, NotFoundError } from "./UpdateTransferCustomizationError";

export type UpdateTransferCustomizationResponse = UpdateTransferCustomizationOutput | InvalidParameterError | NotFoundError;
