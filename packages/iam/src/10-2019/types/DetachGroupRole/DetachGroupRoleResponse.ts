import { DetachGroupRoleOutput } from "./DetachGroupRole";
import { BadRequestError, NotFoundError } from "./DetachGroupRoleError";

export type DetachGroupRoleResponse = DetachGroupRoleOutput | BadRequestError | NotFoundError;
