import { GetTransferFileOutput } from "./GetTransferFile";
import { InvalidParameterError, NotFoundError } from "./GetTransferFileError";

export type GetTransferFileResponse = GetTransferFileOutput | InvalidParameterError | NotFoundError;
