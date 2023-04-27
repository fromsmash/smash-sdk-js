import { GetUserSCIMOutput } from "./GetUserSCIM";
import { InvalidParameterError, NotFoundError } from "./GetUserSCIMError";

export type GetUserSCIMResponse = GetUserSCIMOutput | InvalidParameterError | NotFoundError;
