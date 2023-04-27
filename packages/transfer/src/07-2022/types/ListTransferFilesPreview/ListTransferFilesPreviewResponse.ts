import { ListTransferFilesPreviewOutput } from "./ListTransferFilesPreview";
import { InvalidParameterError, NotFoundError, PasswordDoesNotMatchError, OwnerUsageExceededError, AccessorUsageExceededError } from "./ListTransferFilesPreviewError";

export type ListTransferFilesPreviewResponse = ListTransferFilesPreviewOutput | InvalidParameterError | NotFoundError | PasswordDoesNotMatchError | OwnerUsageExceededError | AccessorUsageExceededError;
