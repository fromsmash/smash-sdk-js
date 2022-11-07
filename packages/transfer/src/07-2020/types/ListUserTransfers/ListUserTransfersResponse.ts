import { ListUserTransfersOutput } from "./ListUserTransfers";
import { BadRequestError, NotFoundError } from "./ListUserTransfersError";

export type ListUserTransfersResponse = ListUserTransfersOutput | BadRequestError | NotFoundError;
