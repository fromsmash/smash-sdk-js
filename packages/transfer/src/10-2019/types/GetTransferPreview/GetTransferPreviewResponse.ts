import { GetTransferPreviewOutput } from "./GetTransferPreview";
import { BadRequestError, NotFoundError, PasswordDoesNotMatchError, InvalidEmailError } from "./GetTransferPreviewError";

export type GetTransferPreviewResponse = GetTransferPreviewOutput | BadRequestError | NotFoundError | PasswordDoesNotMatchError | InvalidEmailError;
