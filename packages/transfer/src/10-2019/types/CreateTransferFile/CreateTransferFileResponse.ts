import { CreateTransferFileOutput } from "./CreateTransferFile";
import { InvalidParameterError, NotFoundError, TransferAlreadyLockedError, TransferIsInQueueError, ConflictError } from "./CreateTransferFileError";

export type CreateTransferFileResponse = CreateTransferFileOutput | InvalidParameterError | NotFoundError | TransferAlreadyLockedError | TransferIsInQueueError | ConflictError;
