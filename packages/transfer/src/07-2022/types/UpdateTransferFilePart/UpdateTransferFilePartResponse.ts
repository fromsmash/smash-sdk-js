import { UpdateTransferFilePartOutput } from "./UpdateTransferFilePart";
import { BadRequestError, NotFoundError, TransferAlreadyLockedError, FileAlreadyLockedError } from "./UpdateTransferFilePartError";

export type UpdateTransferFilePartResponse = UpdateTransferFilePartOutput | BadRequestError | NotFoundError | TransferAlreadyLockedError | FileAlreadyLockedError;
