import { GetTransferQueueOutput } from "./GetTransferQueue";
import { InvalidParameterError, NotFoundError } from "./GetTransferQueueError";

export type GetTransferQueueResponse = GetTransferQueueOutput | InvalidParameterError | NotFoundError;
