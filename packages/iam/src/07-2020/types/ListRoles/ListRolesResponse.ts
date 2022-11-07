import { ListRolesOutput } from "./ListRoles";
import { BadRequestError } from "./ListRolesError";

export type ListRolesResponse = ListRolesOutput | BadRequestError;
