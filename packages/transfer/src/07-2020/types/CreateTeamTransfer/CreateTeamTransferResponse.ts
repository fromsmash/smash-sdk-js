import { CreateTeamTransferOutput } from "./CreateTeamTransfer";
import { BadRequestError, ForbiddenError, CustomUrlAlreadyInUseError } from "./CreateTeamTransferError";

export type CreateTeamTransferResponse = CreateTeamTransferOutput | BadRequestError | ForbiddenError | CustomUrlAlreadyInUseError;
