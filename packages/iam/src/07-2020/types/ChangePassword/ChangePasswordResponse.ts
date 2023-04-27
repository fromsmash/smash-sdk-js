import { ChangePasswordOutput } from "./ChangePassword";
import { InvalidParameterError, NotFoundError, InvalidPasswordSecretError, ExpiredPasswordSecretError } from "./ChangePasswordError";

export type ChangePasswordResponse = ChangePasswordOutput | InvalidParameterError | NotFoundError | InvalidPasswordSecretError | ExpiredPasswordSecretError;
