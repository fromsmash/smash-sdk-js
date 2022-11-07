import { ListUserGroupsRolesOutput } from "./ListUserGroupsRoles";
import { BadRequestError, NotFoundError } from "./ListUserGroupsRolesError";

export type ListUserGroupsRolesResponse = ListUserGroupsRolesOutput | BadRequestError | NotFoundError;
