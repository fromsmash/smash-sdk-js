import { UpdateTransferFilePartsOutput } from "./UpdateTransferFileParts";
import { InvalidParameterError, NotFoundError, TransferAlreadyLockedError, FileAlreadyLockedError } from "./UpdateTransferFilePartsError";

export type UpdateTransferFilePartsResponse = UpdateTransferFilePartsOutput | InvalidParameterError | NotFoundError | TransferAlreadyLockedError | FileAlreadyLockedError;
