import { GetTeamTransferOutput } from "./GetTeamTransfer";
import { InvalidParameterError, NotFoundError } from "./GetTeamTransferError";

export type GetTeamTransferResponse = GetTeamTransferOutput | InvalidParameterError | NotFoundError;
