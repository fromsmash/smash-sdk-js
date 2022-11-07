import { AttachUserRoleOutput } from "./AttachUserRole";
import { BadRequestError, NotFoundError } from "./AttachUserRoleError";

export type AttachUserRoleResponse = AttachUserRoleOutput | BadRequestError | NotFoundError;
