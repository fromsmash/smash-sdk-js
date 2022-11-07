import { DeleteTransferOutput } from "./DeleteTransfer";
import { BadRequestError, NotFoundError, TransferNotUploadedError } from "./DeleteTransferError";

export type DeleteTransferResponse = DeleteTransferOutput | BadRequestError | NotFoundError | TransferNotUploadedError;
