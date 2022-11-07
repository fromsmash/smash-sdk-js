import { UpdatePasswordOutput } from "./UpdatePassword";
import { BadRequestError, NotMatchError, WrongAuthError } from "./UpdatePasswordError";

export type UpdatePasswordResponse = UpdatePasswordOutput | BadRequestError | NotMatchError | WrongAuthError;
