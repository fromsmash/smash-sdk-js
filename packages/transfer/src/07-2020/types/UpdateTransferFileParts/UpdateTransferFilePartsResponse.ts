import { UpdateTransferFilePartsOutput } from "./UpdateTransferFileParts";
import { BadRequestError, NotFoundError, TransferAlreadyLockedError, FileAlreadyLockedError } from "./UpdateTransferFilePartsError";

export type UpdateTransferFilePartsResponse = UpdateTransferFilePartsOutput | BadRequestError | NotFoundError | TransferAlreadyLockedError | FileAlreadyLockedError;
