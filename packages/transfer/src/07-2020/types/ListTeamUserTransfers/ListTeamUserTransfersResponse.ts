import { ListTeamUserTransfersOutput } from "./ListTeamUserTransfers";
import { BadRequestError } from "./ListTeamUserTransfersError";

export type ListTeamUserTransfersResponse = ListTeamUserTransfersOutput | BadRequestError;
