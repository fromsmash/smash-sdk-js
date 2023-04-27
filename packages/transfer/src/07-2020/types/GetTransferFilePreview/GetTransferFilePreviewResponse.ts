import { GetTransferFilePreviewOutput } from "./GetTransferFilePreview";
import { InvalidParameterError, NotFoundError, PasswordDoesNotMatchError } from "./GetTransferFilePreviewError";

export type GetTransferFilePreviewResponse = GetTransferFilePreviewOutput | InvalidParameterError | NotFoundError | PasswordDoesNotMatchError;
