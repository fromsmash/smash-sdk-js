import { UpdateUserSCIMOutput } from "./UpdateUserSCIM";
import { BadRequestError, NotFoundError } from "./UpdateUserSCIMError";

export type UpdateUserSCIMResponse = UpdateUserSCIMOutput | BadRequestError | NotFoundError;
