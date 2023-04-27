import { ListTeamRolesOutput } from "./ListTeamRoles";
import { InvalidParameterError, NotFoundError } from "./ListTeamRolesError";

export type ListTeamRolesResponse = ListTeamRolesOutput | InvalidParameterError | NotFoundError;
