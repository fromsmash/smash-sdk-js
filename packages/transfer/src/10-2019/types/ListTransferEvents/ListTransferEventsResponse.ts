import { ListTransferEventsOutput } from "./ListTransferEvents";
import { BadRequestError, NotFoundError } from "./ListTransferEventsError";

export type ListTransferEventsResponse = ListTransferEventsOutput | BadRequestError | NotFoundError;
