import { CreateTransferSignedUrlsOutput } from "./CreateTransferSignedUrls";
import { BadRequestError, NotFoundError, PasswordDoesNotMatchError } from "./CreateTransferSignedUrlsError";

export type CreateTransferSignedUrlsResponse = CreateTransferSignedUrlsOutput | BadRequestError | NotFoundError | PasswordDoesNotMatchError;
