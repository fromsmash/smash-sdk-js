import { ListUserRolesOutput } from "./ListUserRoles";
import { BadRequestError, NotFoundError } from "./ListUserRolesError";

export type ListUserRolesResponse = ListUserRolesOutput | BadRequestError | NotFoundError;
