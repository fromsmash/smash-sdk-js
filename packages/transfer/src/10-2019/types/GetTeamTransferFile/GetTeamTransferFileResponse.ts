import { GetTeamTransferFileOutput } from "./GetTeamTransferFile";
import { BadRequestError, NotFoundError, ForbiddenError } from "./GetTeamTransferFileError";

export type GetTeamTransferFileResponse = GetTeamTransferFileOutput | BadRequestError | NotFoundError | ForbiddenError;
