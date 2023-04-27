import { GetTransferPreviewOutput } from "./GetTransferPreview";
import { InvalidParameterError, NotFoundError, PasswordDoesNotMatchError, InvalidEmailError, OwnerUsageExceededError, AccessorUsageExceededError } from "./GetTransferPreviewError";

export type GetTransferPreviewResponse = GetTransferPreviewOutput | InvalidParameterError | NotFoundError | PasswordDoesNotMatchError | InvalidEmailError | OwnerUsageExceededError | AccessorUsageExceededError;
