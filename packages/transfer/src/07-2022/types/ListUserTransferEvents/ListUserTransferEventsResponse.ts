import { ListUserTransferEventsOutput } from "./ListUserTransferEvents";
import { BadRequestError, NotFoundError } from "./ListUserTransferEventsError";

export type ListUserTransferEventsResponse = ListUserTransferEventsOutput | BadRequestError | NotFoundError;
