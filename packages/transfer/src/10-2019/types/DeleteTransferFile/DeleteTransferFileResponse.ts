import { DeleteTransferFileOutput } from "./DeleteTransferFile";
import { BadRequestError, NotFoundError } from "./DeleteTransferFileError";

export type DeleteTransferFileResponse = DeleteTransferFileOutput | BadRequestError | NotFoundError;
