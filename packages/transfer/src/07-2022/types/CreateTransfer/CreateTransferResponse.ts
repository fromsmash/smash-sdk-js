import { CreateTransferOutput } from "./CreateTransfer";
import { BadRequestError, ForbiddenError, CustomUrlAlreadyInUseError } from "./CreateTransferError";

export type CreateTransferResponse = CreateTransferOutput | BadRequestError | ForbiddenError | CustomUrlAlreadyInUseError;
