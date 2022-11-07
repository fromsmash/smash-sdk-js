import { DeleteUserSCIMOutput } from "./DeleteUserSCIM";
import { BadRequestError, NotFoundError } from "./DeleteUserSCIMError";

export type DeleteUserSCIMResponse = DeleteUserSCIMOutput | BadRequestError | NotFoundError;
