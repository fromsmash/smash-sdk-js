import { AttachGroupRoleOutput } from "./AttachGroupRole";
import { BadRequestError, NotFoundError } from "./AttachGroupRoleError";

export type AttachGroupRoleResponse = AttachGroupRoleOutput | BadRequestError | NotFoundError;
