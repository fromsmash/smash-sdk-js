import { ListGroupsOutput } from "./ListGroups";
import { BadRequestError, NotFoundError } from "./ListGroupsError";

export type ListGroupsResponse = ListGroupsOutput | BadRequestError | NotFoundError;
