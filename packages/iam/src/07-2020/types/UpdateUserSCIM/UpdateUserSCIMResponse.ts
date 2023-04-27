import { UpdateUserSCIMOutput } from "./UpdateUserSCIM";
import { InvalidParameterError, NotFoundError } from "./UpdateUserSCIMError";

export type UpdateUserSCIMResponse = UpdateUserSCIMOutput | InvalidParameterError | NotFoundError;
