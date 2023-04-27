import { CreateGroupOutput } from "./CreateGroup";
import { InvalidParameterError, ConflictError } from "./CreateGroupError";

export type CreateGroupResponse = CreateGroupOutput | InvalidParameterError | ConflictError;
