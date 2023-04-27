import { ResetPasswordOutput } from "./ResetPassword";
import { InvalidParameterError, InvalidSecretError, InvalidPasswordSecretError, ExpiredPasswordSecretError } from "./ResetPasswordError";

export type ResetPasswordResponse = ResetPasswordOutput | InvalidParameterError | InvalidSecretError | InvalidPasswordSecretError | ExpiredPasswordSecretError;
