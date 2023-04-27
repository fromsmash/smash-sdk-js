import { ListTeamGroupRolesOutput } from "./ListTeamGroupRoles";
import { InvalidParameterError, NotFoundError } from "./ListTeamGroupRolesError";

export type ListTeamGroupRolesResponse = ListTeamGroupRolesOutput | InvalidParameterError | NotFoundError;
