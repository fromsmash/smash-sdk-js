import { ListTeamTransferFilesOutput } from "./ListTeamTransferFiles";
import { BadRequestError, NotFoundError, ForbiddenError } from "./ListTeamTransferFilesError";

export type ListTeamTransferFilesResponse = ListTeamTransferFilesOutput | BadRequestError | NotFoundError | ForbiddenError;
