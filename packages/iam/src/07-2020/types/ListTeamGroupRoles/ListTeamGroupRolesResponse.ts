import { ListTeamGroupRolesOutput } from "./ListTeamGroupRoles";
import { BadRequestError, NotFoundError } from "./ListTeamGroupRolesError";

export type ListTeamGroupRolesResponse = ListTeamGroupRolesOutput | BadRequestError | NotFoundError;
