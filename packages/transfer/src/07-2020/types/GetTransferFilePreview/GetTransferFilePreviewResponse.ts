import { GetTransferFilePreviewOutput } from "./GetTransferFilePreview";
import { BadRequestError, NotFoundError, PasswordDoesNotMatchError } from "./GetTransferFilePreviewError";

export type GetTransferFilePreviewResponse = GetTransferFilePreviewOutput | BadRequestError | NotFoundError | PasswordDoesNotMatchError;
