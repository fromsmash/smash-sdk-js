import { DeleteTeamTransferOutput } from "./DeleteTeamTransfer";
import { InvalidParameterError, NotFoundError, TransferNotUploadedError } from "./DeleteTeamTransferError";

export type DeleteTeamTransferResponse = DeleteTeamTransferOutput | InvalidParameterError | NotFoundError | TransferNotUploadedError;
