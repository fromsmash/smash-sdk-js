import { DeleteTeamTransferOutput } from "./DeleteTeamTransfer";
import { BadRequestError, NotFoundError, TransferNotUploadedError } from "./DeleteTeamTransferError";

export type DeleteTeamTransferResponse = DeleteTeamTransferOutput | BadRequestError | NotFoundError | TransferNotUploadedError;
