import { ListTeamTransferEventsOutput } from "./ListTeamTransferEvents";
import { InvalidParameterError, NotFoundError } from "./ListTeamTransferEventsError";

export type ListTeamTransferEventsResponse = ListTeamTransferEventsOutput | InvalidParameterError | NotFoundError;
