import { GetUserTransferOutput } from "./GetUserTransfer";
import { BadRequestError, NotFoundError } from "./GetUserTransferError";

export type GetUserTransferResponse = GetUserTransferOutput | BadRequestError | NotFoundError;
