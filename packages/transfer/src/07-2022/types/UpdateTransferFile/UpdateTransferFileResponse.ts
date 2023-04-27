import { UpdateTransferFileOutput } from "./UpdateTransferFile";
import { InvalidParameterError, NotFoundError, TransferAlreadyLockedError, FileAlreadyLockedError } from "./UpdateTransferFileError";

export type UpdateTransferFileResponse = UpdateTransferFileOutput | InvalidParameterError | NotFoundError | TransferAlreadyLockedError | FileAlreadyLockedError;
