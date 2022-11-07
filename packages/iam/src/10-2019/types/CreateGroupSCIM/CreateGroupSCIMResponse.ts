import { CreateGroupSCIMOutput } from "./CreateGroupSCIM";
import { BadRequestError, ConflictError } from "./CreateGroupSCIMError";

export type CreateGroupSCIMResponse = CreateGroupSCIMOutput | BadRequestError | ConflictError;
