import { ListUserTransferFilesOutput } from "./ListUserTransferFiles";
import { InvalidParameterError, NotFoundError } from "./ListUserTransferFilesError";

export type ListUserTransferFilesResponse = ListUserTransferFilesOutput | InvalidParameterError | NotFoundError;
