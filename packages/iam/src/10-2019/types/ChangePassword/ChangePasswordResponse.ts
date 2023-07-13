import { ChangePasswordOutput } from "./ChangePassword";
import { InvalidParameterError, NotFoundError, InvalidForgotPasswordError, ExpiredPasswordSecretError, InvalidForgotPasswordSecretError } from "./ChangePasswordError";

export type ChangePasswordResponse = ChangePasswordOutput | InvalidParameterError | NotFoundError | InvalidForgotPasswordError | ExpiredPasswordSecretError | InvalidForgotPasswordSecretError;
