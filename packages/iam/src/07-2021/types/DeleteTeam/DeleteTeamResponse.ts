import { DeleteTeamOutput } from "./DeleteTeam";
import { BadRequestError, NotFoundError, ForbiddenError } from "./DeleteTeamError";

export type DeleteTeamResponse = DeleteTeamOutput | BadRequestError | NotFoundError | ForbiddenError;
