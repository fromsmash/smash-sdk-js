import { DeleteTransferFileOutput } from "./DeleteTransferFile";
import { InvalidParameterError, NotFoundError } from "./DeleteTransferFileError";

export type DeleteTransferFileResponse = DeleteTransferFileOutput | InvalidParameterError | NotFoundError;
