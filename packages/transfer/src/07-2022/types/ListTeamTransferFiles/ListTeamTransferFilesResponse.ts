import { ListTeamTransferFilesOutput } from "./ListTeamTransferFiles";
import { InvalidParameterError, NotFoundError, ForbiddenError } from "./ListTeamTransferFilesError";

export type ListTeamTransferFilesResponse = ListTeamTransferFilesOutput | InvalidParameterError | NotFoundError | ForbiddenError;
