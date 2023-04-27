import { ListTransferEventsOutput } from "./ListTransferEvents";
import { InvalidParameterError, NotFoundError } from "./ListTransferEventsError";

export type ListTransferEventsResponse = ListTransferEventsOutput | InvalidParameterError | NotFoundError;
