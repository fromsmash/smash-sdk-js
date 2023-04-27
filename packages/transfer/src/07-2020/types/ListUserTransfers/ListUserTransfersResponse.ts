import { ListUserTransfersOutput } from "./ListUserTransfers";
import { InvalidParameterError, NotFoundError } from "./ListUserTransfersError";

export type ListUserTransfersResponse = ListUserTransfersOutput | InvalidParameterError | NotFoundError;
