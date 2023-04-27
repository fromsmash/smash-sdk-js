import { ListTeamGroupsOutput } from "./ListTeamGroups";
import { InvalidParameterError, NotFoundError } from "./ListTeamGroupsError";

export type ListTeamGroupsResponse = ListTeamGroupsOutput | InvalidParameterError | NotFoundError;
