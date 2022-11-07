import { GetTransferQueueOutput } from "./GetTransferQueue";
import { BadRequestError, NotFoundError } from "./GetTransferQueueError";

export type GetTransferQueueResponse = GetTransferQueueOutput | BadRequestError | NotFoundError;
