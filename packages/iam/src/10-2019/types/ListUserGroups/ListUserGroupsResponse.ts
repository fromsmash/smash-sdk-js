import { ListUserGroupsOutput } from "./ListUserGroups";
import { InvalidParameterError, NotFoundError } from "./ListUserGroupsError";

export type ListUserGroupsResponse = ListUserGroupsOutput | InvalidParameterError | NotFoundError;
