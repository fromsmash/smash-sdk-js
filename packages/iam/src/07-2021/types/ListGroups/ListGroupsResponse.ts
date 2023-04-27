import { ListGroupsOutput } from "./ListGroups";
import { NotFoundError } from "./ListGroupsError";

export type ListGroupsResponse = ListGroupsOutput | NotFoundError;
