import { ListTeamGroupsOutput } from "./ListTeamGroups";
import { BadRequestError, NotFoundError } from "./ListTeamGroupsError";

export type ListTeamGroupsResponse = ListTeamGroupsOutput | BadRequestError | NotFoundError;
