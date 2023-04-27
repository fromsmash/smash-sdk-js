import { UpdateTransferOutput } from "./UpdateTransfer";
import { InvalidParameterError, NotFoundError, TransferAlreadyLockedError } from "./UpdateTransferError";

export type UpdateTransferResponse = UpdateTransferOutput | InvalidParameterError | NotFoundError | TransferAlreadyLockedError;
