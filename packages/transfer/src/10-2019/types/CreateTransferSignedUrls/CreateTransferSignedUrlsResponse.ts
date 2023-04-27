import { CreateTransferSignedUrlsOutput } from "./CreateTransferSignedUrls";
import { InvalidParameterError, NotFoundError, PasswordDoesNotMatchError } from "./CreateTransferSignedUrlsError";

export type CreateTransferSignedUrlsResponse = CreateTransferSignedUrlsOutput | InvalidParameterError | NotFoundError | PasswordDoesNotMatchError;
