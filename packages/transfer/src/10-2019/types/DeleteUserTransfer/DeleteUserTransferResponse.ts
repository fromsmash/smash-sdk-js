import { DeleteUserTransferOutput } from "./DeleteUserTransfer";
import { InvalidParameterError, NotFoundError, TransferNotUploadedError } from "./DeleteUserTransferError";

export type DeleteUserTransferResponse = DeleteUserTransferOutput | InvalidParameterError | NotFoundError | TransferNotUploadedError;
