import { UpdatePasswordOutput } from "./UpdatePassword";
import { InvalidParameterError, NotFoundError, InvalidAuthenticationModeError, PasswordDoesNotMatchError } from "./UpdatePasswordError";

export type UpdatePasswordResponse = UpdatePasswordOutput | InvalidParameterError | NotFoundError | InvalidAuthenticationModeError | PasswordDoesNotMatchError;
