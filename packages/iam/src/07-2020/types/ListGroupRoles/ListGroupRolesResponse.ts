import { ListGroupRolesOutput } from "./ListGroupRoles";
import { BadRequestError, NotFoundError } from "./ListGroupRolesError";

export type ListGroupRolesResponse = ListGroupRolesOutput | BadRequestError | NotFoundError;
