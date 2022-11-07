import { ListUserTransferFilesOutput } from "./ListUserTransferFiles";
import { BadRequestError, NotFoundError } from "./ListUserTransferFilesError";

export type ListUserTransferFilesResponse = ListUserTransferFilesOutput | BadRequestError | NotFoundError;
