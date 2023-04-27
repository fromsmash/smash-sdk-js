import { ListTeamUserRolesOutput } from "./ListTeamUserRoles";
import { InvalidParameterError, NotFoundError } from "./ListTeamUserRolesError";

export type ListTeamUserRolesResponse = ListTeamUserRolesOutput | InvalidParameterError | NotFoundError;
