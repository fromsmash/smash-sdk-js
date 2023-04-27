import { ListGroupUsersOutput } from "./ListGroupUsers";
import { InvalidParameterError, NotFoundError } from "./ListGroupUsersError";

export type ListGroupUsersResponse = ListGroupUsersOutput | InvalidParameterError | NotFoundError;
