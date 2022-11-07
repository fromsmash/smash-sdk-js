import { UpdateTransferOutput } from "./UpdateTransfer";
import { BadRequestError, NotFoundError, TransferAlreadyLockedError } from "./UpdateTransferError";

export type UpdateTransferResponse = UpdateTransferOutput | BadRequestError | NotFoundError | TransferAlreadyLockedError;
