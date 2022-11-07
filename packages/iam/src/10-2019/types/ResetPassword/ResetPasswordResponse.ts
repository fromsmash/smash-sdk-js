import { ResetPasswordOutput } from "./ResetPassword";
import { BadRequestError, InvalidSecretError, InvalidPasswordSecretError, ExpiredPasswordSecretError } from "./ResetPasswordError";

export type ResetPasswordResponse = ResetPasswordOutput | BadRequestError | InvalidSecretError | InvalidPasswordSecretError | ExpiredPasswordSecretError;
