import { UpdateTransferFileOutput } from "./UpdateTransferFile";
import { BadRequestError, NotFoundError, TransferAlreadyLockedError, FileAlreadyLockedError } from "./UpdateTransferFileError";

export type UpdateTransferFileResponse = UpdateTransferFileOutput | BadRequestError | NotFoundError | TransferAlreadyLockedError | FileAlreadyLockedError;
