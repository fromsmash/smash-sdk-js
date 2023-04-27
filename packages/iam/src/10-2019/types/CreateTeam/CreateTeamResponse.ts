import { CreateTeamOutput } from "./CreateTeam";
import { InvalidParameterError, ConflictError } from "./CreateTeamError";

export type CreateTeamResponse = CreateTeamOutput | InvalidParameterError | ConflictError;
