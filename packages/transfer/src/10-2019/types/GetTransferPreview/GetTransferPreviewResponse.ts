import { GetTransferPreviewOutput } from "./GetTransferPreview";
import { BadRequestError, NotFoundError, PasswordDoesNotMatchError, UnvalidEmailError } from "./GetTransferPreviewError";

export type GetTransferPreviewResponse = GetTransferPreviewOutput | BadRequestError | NotFoundError | PasswordDoesNotMatchError | UnvalidEmailError;
