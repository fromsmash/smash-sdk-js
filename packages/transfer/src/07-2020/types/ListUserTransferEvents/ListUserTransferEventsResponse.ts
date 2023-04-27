import { ListUserTransferEventsOutput } from "./ListUserTransferEvents";
import { InvalidParameterError, NotFoundError } from "./ListUserTransferEventsError";

export type ListUserTransferEventsResponse = ListUserTransferEventsOutput | InvalidParameterError | NotFoundError;
