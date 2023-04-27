import { UpdatePasswordOutput } from "./UpdatePassword";
import { InvalidParameterError, NotMatchError, WrongAuthError } from "./UpdatePasswordError";

export type UpdatePasswordResponse = UpdatePasswordOutput | InvalidParameterError | NotMatchError | WrongAuthError;
