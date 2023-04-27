import { ListTeamUserTransfersOutput } from "./ListTeamUserTransfers";
import { InvalidParameterError } from "./ListTeamUserTransfersError";

export type ListTeamUserTransfersResponse = ListTeamUserTransfersOutput | InvalidParameterError;
