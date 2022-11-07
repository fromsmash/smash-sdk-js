import { ListGroupUsersOutput } from "./ListGroupUsers";
import { BadRequestError, NotFoundError } from "./ListGroupUsersError";

export type ListGroupUsersResponse = ListGroupUsersOutput | BadRequestError | NotFoundError;
