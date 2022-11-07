import { UpdateTeamOutput } from "./UpdateTeam";
import { BadRequestError, NotFoundError } from "./UpdateTeamError";

export type UpdateTeamResponse = UpdateTeamOutput | BadRequestError | NotFoundError;
