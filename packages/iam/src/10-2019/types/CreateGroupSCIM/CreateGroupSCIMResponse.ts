import { CreateGroupSCIMOutput } from "./CreateGroupSCIM";
import { InvalidParameterError, NotFoundError, ConflictError } from "./CreateGroupSCIMError";

export type CreateGroupSCIMResponse = CreateGroupSCIMOutput | InvalidParameterError | NotFoundError | ConflictError;
