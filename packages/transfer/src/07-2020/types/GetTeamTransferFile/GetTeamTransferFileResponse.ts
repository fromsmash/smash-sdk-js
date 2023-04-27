import { GetTeamTransferFileOutput } from "./GetTeamTransferFile";
import { InvalidParameterError, NotFoundError, ForbiddenError } from "./GetTeamTransferFileError";

export type GetTeamTransferFileResponse = GetTeamTransferFileOutput | InvalidParameterError | NotFoundError | ForbiddenError;
