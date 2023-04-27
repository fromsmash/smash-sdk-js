import { CreateTransferFilePartOutput } from "./CreateTransferFilePart";
import { InvalidParameterError, NotFoundError, TransferAlreadyLockedError, FileAlreadyLockedError } from "./CreateTransferFilePartError";

export type CreateTransferFilePartResponse = CreateTransferFilePartOutput | InvalidParameterError | NotFoundError | TransferAlreadyLockedError | FileAlreadyLockedError;
