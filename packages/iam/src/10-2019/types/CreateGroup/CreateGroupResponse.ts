import { CreateGroupOutput } from "./CreateGroup";
import { BadRequestError, ConflictError } from "./CreateGroupError";

export type CreateGroupResponse = CreateGroupOutput | BadRequestError | ConflictError;
