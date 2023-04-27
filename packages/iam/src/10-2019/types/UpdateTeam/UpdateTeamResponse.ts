import { UpdateTeamOutput } from "./UpdateTeam";
import { InvalidParameterError, NotFoundError } from "./UpdateTeamError";

export type UpdateTeamResponse = UpdateTeamOutput | InvalidParameterError | NotFoundError;
