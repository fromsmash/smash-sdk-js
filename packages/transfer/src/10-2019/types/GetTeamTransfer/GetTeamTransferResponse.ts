import { GetTeamTransferOutput } from "./GetTeamTransfer";
import { BadRequestError, NotFoundError } from "./GetTeamTransferError";

export type GetTeamTransferResponse = GetTeamTransferOutput | BadRequestError | NotFoundError;
