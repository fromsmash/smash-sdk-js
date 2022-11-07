import { GetTeamTransferQueueOutput } from "./GetTeamTransferQueue";
import { BadRequestError, NotFoundError } from "./GetTeamTransferQueueError";

export type GetTeamTransferQueueResponse = GetTeamTransferQueueOutput | BadRequestError | NotFoundError;
