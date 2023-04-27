import { ChangePasswordOutput } from "./ChangePassword";
import { InvalidParameterError, InvalidPasswordSecretError, ExpiredPasswordSecretError } from "./ChangePasswordError";

export type ChangePasswordResponse = ChangePasswordOutput | InvalidParameterError | InvalidPasswordSecretError | ExpiredPasswordSecretError;
