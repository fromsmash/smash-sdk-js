import { GetRoleOutput } from "./GetRole";
import { BadRequestError, NotFoundError } from "./GetRoleError";

export type GetRoleResponse = GetRoleOutput | BadRequestError | NotFoundError;
