import { GetTransferFileOutput } from "./GetTransferFile";
import { BadRequestError, NotFoundError } from "./GetTransferFileError";

export type GetTransferFileResponse = GetTransferFileOutput | BadRequestError | NotFoundError;
