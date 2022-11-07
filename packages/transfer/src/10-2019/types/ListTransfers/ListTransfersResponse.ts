import { ListTransfersOutput } from "./ListTransfers";
import { BadRequestError, NotFoundError } from "./ListTransfersError";

export type ListTransfersResponse = ListTransfersOutput | BadRequestError | NotFoundError;
