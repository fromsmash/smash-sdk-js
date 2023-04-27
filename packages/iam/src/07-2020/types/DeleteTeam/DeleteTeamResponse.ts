import { DeleteTeamOutput } from "./DeleteTeam";
import { InvalidParameterError, NotFoundError, ForbiddenError } from "./DeleteTeamError";

export type DeleteTeamResponse = DeleteTeamOutput | InvalidParameterError | NotFoundError | ForbiddenError;
