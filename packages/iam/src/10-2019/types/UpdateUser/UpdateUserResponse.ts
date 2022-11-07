import { UpdateUserOutput } from "./UpdateUser";
import { BadRequestError, NotFoundError, WrongAuthError } from "./UpdateUserError";

export type UpdateUserResponse = UpdateUserOutput | BadRequestError | NotFoundError | WrongAuthError;
