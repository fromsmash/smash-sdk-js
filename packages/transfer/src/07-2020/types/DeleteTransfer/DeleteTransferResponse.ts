import { DeleteTransferOutput } from "./DeleteTransfer";
import { InvalidParameterError, NotFoundError, TransferNotUploadedError } from "./DeleteTransferError";

export type DeleteTransferResponse = DeleteTransferOutput | InvalidParameterError | NotFoundError | TransferNotUploadedError;
