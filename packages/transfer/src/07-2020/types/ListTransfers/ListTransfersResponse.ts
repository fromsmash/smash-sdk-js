import { ListTransfersOutput } from "./ListTransfers";
import { NotFoundError } from "./ListTransfersError";

export type ListTransfersResponse = ListTransfersOutput | NotFoundError;
