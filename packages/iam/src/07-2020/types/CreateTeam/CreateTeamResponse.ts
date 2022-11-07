import { CreateTeamOutput } from "./CreateTeam";
import { BadRequestError, ConflictError } from "./CreateTeamError";

export type CreateTeamResponse = CreateTeamOutput | BadRequestError | ConflictError;
