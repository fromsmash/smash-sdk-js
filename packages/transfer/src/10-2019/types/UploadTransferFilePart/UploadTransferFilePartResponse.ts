import { UploadTransferFilePartOutput } from "./UploadTransferFilePart";
import { BadRequestError, InternalServerError } from "./UploadTransferFilePartError";

export type UploadTransferFilePartResponse = UploadTransferFilePartOutput | string | BadRequestError | InternalServerError;
