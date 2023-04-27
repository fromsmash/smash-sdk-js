import { CreateTransferFilePartsOutput } from "./CreateTransferFileParts";
import { InvalidParameterError, NotFoundError, TransferAlreadyLockedError, FileAlreadyLockedError } from "./CreateTransferFilePartsError";

export type CreateTransferFilePartsResponse = CreateTransferFilePartsOutput | InvalidParameterError | NotFoundError | TransferAlreadyLockedError | FileAlreadyLockedError;
