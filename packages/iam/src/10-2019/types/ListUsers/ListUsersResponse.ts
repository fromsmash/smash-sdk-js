import { ListUsersOutput } from "./ListUsers";
import { BadRequestError } from "./ListUsersError";

export type ListUsersResponse = ListUsersOutput | BadRequestError;
