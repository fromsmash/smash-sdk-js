import { ListTeamUserGroupsOutput } from "./ListTeamUserGroups";
import { InvalidParameterError, NotFoundError } from "./ListTeamUserGroupsError";

export type ListTeamUserGroupsResponse = ListTeamUserGroupsOutput | InvalidParameterError | NotFoundError;
