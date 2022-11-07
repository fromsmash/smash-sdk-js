import { ListTransferFilesOutput } from "./ListTransferFiles";
import { BadRequestError, NotFoundError } from "./ListTransferFilesError";

export type ListTransferFilesResponse = ListTransferFilesOutput | BadRequestError | NotFoundError;
