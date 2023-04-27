import { DeleteUserSCIMOutput } from "./DeleteUserSCIM";
import { InvalidParameterError, NotFoundError } from "./DeleteUserSCIMError";

export type DeleteUserSCIMResponse = DeleteUserSCIMOutput | InvalidParameterError | NotFoundError;
