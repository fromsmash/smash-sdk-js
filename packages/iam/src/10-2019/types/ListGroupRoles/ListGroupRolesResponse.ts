import { ListGroupRolesOutput } from "./ListGroupRoles";
import { InvalidParameterError, NotFoundError } from "./ListGroupRolesError";

export type ListGroupRolesResponse = ListGroupRolesOutput | InvalidParameterError | NotFoundError;
