import { DetachUserRoleOutput } from "./DetachUserRole";
import { BadRequestError, NotFoundError } from "./DetachUserRoleError";

export type DetachUserRoleResponse = DetachUserRoleOutput | BadRequestError | NotFoundError;
