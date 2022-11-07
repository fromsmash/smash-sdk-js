import { CreateTransferFilePartsOutput } from "./CreateTransferFileParts";
import { BadRequestError, NotFoundError, TransferAlreadyLockedError, FileAlreadyLockedError } from "./CreateTransferFilePartsError";

export type CreateTransferFilePartsResponse = CreateTransferFilePartsOutput | BadRequestError | NotFoundError | TransferAlreadyLockedError | FileAlreadyLockedError;
