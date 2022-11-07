import { DeleteTeamTransferOutput } from "./DeleteTeamTransfer";
import { BadRequestError, NotFoundError, ForbiddenError } from "./DeleteTeamTransferError";

export type DeleteTeamTransferResponse = DeleteTeamTransferOutput | BadRequestError | NotFoundError | ForbiddenError;
