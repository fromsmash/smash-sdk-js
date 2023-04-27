import { GetTeamTransferQueueOutput } from "./GetTeamTransferQueue";
import { InvalidParameterError, NotFoundError } from "./GetTeamTransferQueueError";

export type GetTeamTransferQueueResponse = GetTeamTransferQueueOutput | InvalidParameterError | NotFoundError;
