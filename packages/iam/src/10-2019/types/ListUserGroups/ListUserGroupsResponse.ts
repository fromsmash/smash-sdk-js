import { ListUserGroupsOutput } from "./ListUserGroups";
import { BadRequestError, NotFoundError } from "./ListUserGroupsError";

export type ListUserGroupsResponse = ListUserGroupsOutput | BadRequestError | NotFoundError;
