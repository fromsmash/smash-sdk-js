import { GetTransferOutput } from "./GetTransfer";
import { BadRequestError, NotFoundError } from "./GetTransferError";

export type GetTransferResponse = GetTransferOutput | BadRequestError | NotFoundError;
