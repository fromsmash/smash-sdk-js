import { ListTeamTransfersOutput } from "./ListTeamTransfers";
import { InvalidParameterError, NotFoundError, ForbiddenError } from "./ListTeamTransfersError";

export type ListTeamTransfersResponse = ListTeamTransfersOutput | InvalidParameterError | NotFoundError | ForbiddenError;
