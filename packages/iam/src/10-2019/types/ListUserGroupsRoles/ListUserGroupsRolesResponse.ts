import { ListUserGroupsRolesOutput } from "./ListUserGroupsRoles";
import { InvalidParameterError, NotFoundError } from "./ListUserGroupsRolesError";

export type ListUserGroupsRolesResponse = ListUserGroupsRolesOutput | InvalidParameterError | NotFoundError;
