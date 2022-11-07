import { CreateTransferFileOutput } from "./CreateTransferFile";
import { BadRequestError, NotFoundError, AlreadyLockedError, TransferIsInQueueError, ConflictError } from "./CreateTransferFileError";

export type CreateTransferFileResponse = CreateTransferFileOutput | BadRequestError | NotFoundError | AlreadyLockedError | TransferIsInQueueError | ConflictError;
