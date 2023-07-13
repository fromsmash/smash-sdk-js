import { ListTransfersOutput } from "./ListTransfers";
import { InvalidParameterError, NotFoundError } from "./ListTransfersError";

export type ListTransfersResponse = ListTransfersOutput | InvalidParameterError | NotFoundError;
