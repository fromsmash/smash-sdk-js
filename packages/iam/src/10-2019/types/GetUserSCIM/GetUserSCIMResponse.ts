import { GetUserSCIMOutput } from "./GetUserSCIM";
import { BadRequestError, NotFoundError } from "./GetUserSCIMError";

export type GetUserSCIMResponse = GetUserSCIMOutput | BadRequestError | NotFoundError;
