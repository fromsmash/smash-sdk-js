import { ListUserRolesOutput } from "./ListUserRoles";
import { InvalidParameterError, NotFoundError } from "./ListUserRolesError";

export type ListUserRolesResponse = ListUserRolesOutput | InvalidParameterError | NotFoundError;
