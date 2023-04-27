import { LockTransferOutput } from "./LockTransfer";
import { InvalidParameterError, NotFoundError, TransferAlreadyLockedError, TransferIsDirtyError, TransferIsInQueueError } from "./LockTransferError";

export type LockTransferResponse = LockTransferOutput | InvalidParameterError | NotFoundError | TransferAlreadyLockedError | TransferIsDirtyError | TransferIsInQueueError;
