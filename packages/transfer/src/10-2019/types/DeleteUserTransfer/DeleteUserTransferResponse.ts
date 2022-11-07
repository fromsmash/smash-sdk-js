import { DeleteUserTransferOutput } from "./DeleteUserTransfer";
import { BadRequestError, NotFoundError, TransferNotUploadedError } from "./DeleteUserTransferError";

export type DeleteUserTransferResponse = DeleteUserTransferOutput | BadRequestError | NotFoundError | TransferNotUploadedError;
