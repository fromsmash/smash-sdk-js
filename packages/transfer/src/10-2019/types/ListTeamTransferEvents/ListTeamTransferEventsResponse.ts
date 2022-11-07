import { ListTeamTransferEventsOutput } from "./ListTeamTransferEvents";
import { BadRequestError, NotFoundError } from "./ListTeamTransferEventsError";

export type ListTeamTransferEventsResponse = ListTeamTransferEventsOutput | BadRequestError | NotFoundError;
