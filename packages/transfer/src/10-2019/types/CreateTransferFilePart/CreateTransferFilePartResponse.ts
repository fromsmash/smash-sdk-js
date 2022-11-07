import { CreateTransferFilePartOutput } from "./CreateTransferFilePart";
import { BadRequestError, NotFoundError, TransferAlreadyLockedError, FileAlreadyLockedError } from "./CreateTransferFilePartError";

export type CreateTransferFilePartResponse = CreateTransferFilePartOutput | BadRequestError | NotFoundError | TransferAlreadyLockedError | FileAlreadyLockedError;
