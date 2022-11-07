import { ListTeamUserGroupsOutput } from "./ListTeamUserGroups";
import { BadRequestError, NotFoundError } from "./ListTeamUserGroupsError";

export type ListTeamUserGroupsResponse = ListTeamUserGroupsOutput | BadRequestError | NotFoundError;
