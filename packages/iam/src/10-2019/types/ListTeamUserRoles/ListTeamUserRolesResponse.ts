import { ListTeamUserRolesOutput } from "./ListTeamUserRoles";
import { BadRequestError, NotFoundError } from "./ListTeamUserRolesError";

export type ListTeamUserRolesResponse = ListTeamUserRolesOutput | BadRequestError | NotFoundError;
