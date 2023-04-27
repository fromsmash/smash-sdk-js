import { GetUserTransferOutput } from "./GetUserTransfer";
import { InvalidParameterError, NotFoundError } from "./GetUserTransferError";

export type GetUserTransferResponse = GetUserTransferOutput | InvalidParameterError | NotFoundError;
