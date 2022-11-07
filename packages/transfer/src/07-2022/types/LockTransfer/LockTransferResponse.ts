import { LockTransferOutput } from "./LockTransfer";
import { BadRequestError, NotFoundError, TransferAlreadyLockedError, TransferIsDirtyError } from "./LockTransferError";

export type LockTransferResponse = LockTransferOutput | BadRequestError | NotFoundError | TransferAlreadyLockedError | TransferIsDirtyError;
