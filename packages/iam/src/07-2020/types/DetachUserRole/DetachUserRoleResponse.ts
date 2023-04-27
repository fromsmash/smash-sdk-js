import { DetachUserRoleOutput } from "./DetachUserRole";
import { InvalidParameterError, NotFoundError } from "./DetachUserRoleError";

export type DetachUserRoleResponse = DetachUserRoleOutput | InvalidParameterError | NotFoundError;
