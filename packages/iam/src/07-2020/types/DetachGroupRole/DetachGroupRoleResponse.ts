import { DetachGroupRoleOutput } from "./DetachGroupRole";
import { InvalidParameterError, NotFoundError } from "./DetachGroupRoleError";

export type DetachGroupRoleResponse = DetachGroupRoleOutput | InvalidParameterError | NotFoundError;
