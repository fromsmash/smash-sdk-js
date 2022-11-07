import { ListTeamRolesOutput } from "./ListTeamRoles";
import { BadRequestError, NotFoundError } from "./ListTeamRolesError";

export type ListTeamRolesResponse = ListTeamRolesOutput | BadRequestError | NotFoundError;
