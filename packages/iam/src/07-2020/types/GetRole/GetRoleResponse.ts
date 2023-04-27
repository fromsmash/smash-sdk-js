import { GetRoleOutput } from "./GetRole";
import { InvalidParameterError, NotFoundError } from "./GetRoleError";

export type GetRoleResponse = GetRoleOutput | InvalidParameterError | NotFoundError;
