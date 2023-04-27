import { GetTransferOutput } from "./GetTransfer";
import { InvalidParameterError, NotFoundError } from "./GetTransferError";

export type GetTransferResponse = GetTransferOutput | InvalidParameterError | NotFoundError;
