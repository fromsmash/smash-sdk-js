import { LockTransferOutput } from "./LockTransfer";
import { BadRequestError, NotFoundError, TransferAlreadyLockedError, TransferIsDirtyError, TransferIsInQueueError } from "./LockTransferError";

export type LockTransferResponse = LockTransferOutput | BadRequestError | NotFoundError | TransferAlreadyLockedError | TransferIsDirtyError | TransferIsInQueueError;
