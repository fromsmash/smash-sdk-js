import { GetUserTransferFileOutput } from "./GetUserTransferFile";
import { BadRequestError, NotFoundError } from "./GetUserTransferFileError";

export type GetUserTransferFileResponse = GetUserTransferFileOutput | BadRequestError | NotFoundError;
