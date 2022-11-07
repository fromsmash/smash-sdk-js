import { ListTransferFilesPreviewOutput } from "./ListTransferFilesPreview";
import { BadRequestError, NotFoundError, PasswordDoesNotMatchError } from "./ListTransferFilesPreviewError";

export type ListTransferFilesPreviewResponse = ListTransferFilesPreviewOutput | BadRequestError | NotFoundError | PasswordDoesNotMatchError;
