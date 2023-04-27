import { GetUserTransferFileOutput } from "./GetUserTransferFile";
import { InvalidParameterError, NotFoundError } from "./GetUserTransferFileError";

export type GetUserTransferFileResponse = GetUserTransferFileOutput | InvalidParameterError | NotFoundError;
