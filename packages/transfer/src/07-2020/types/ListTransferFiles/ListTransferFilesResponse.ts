import { ListTransferFilesOutput } from "./ListTransferFiles";
import { InvalidParameterError, NotFoundError } from "./ListTransferFilesError";

export type ListTransferFilesResponse = ListTransferFilesOutput | InvalidParameterError | NotFoundError;
