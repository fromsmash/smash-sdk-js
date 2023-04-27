import { UpdateTransferFilePartOutput } from "./UpdateTransferFilePart";
import { InvalidParameterError, NotFoundError, TransferAlreadyLockedError, FileAlreadyLockedError } from "./UpdateTransferFilePartError";

export type UpdateTransferFilePartResponse = UpdateTransferFilePartOutput | InvalidParameterError | NotFoundError | TransferAlreadyLockedError | FileAlreadyLockedError;
