import { CreateTransferFileOutput } from "./CreateTransferFile";
import { BadRequestError, NotFoundError, TransferAlreadyLockedError, TransferIsInQueueError, ConflictError } from "./CreateTransferFileError";

export type CreateTransferFileResponse = CreateTransferFileOutput | BadRequestError | NotFoundError | TransferAlreadyLockedError | TransferIsInQueueError | ConflictError;
