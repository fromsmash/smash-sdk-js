import { ListTeamTransfersOutput } from "./ListTeamTransfers";
import { BadRequestError, NotFoundError, ForbiddenError } from "./ListTeamTransfersError";

export type ListTeamTransfersResponse = ListTeamTransfersOutput | BadRequestError | NotFoundError | ForbiddenError;
