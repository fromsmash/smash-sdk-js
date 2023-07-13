import { ResetPasswordOutput } from "./ResetPassword";
import { InvalidParameterError, NotFoundError, InvalidForgotPasswordError, InvalidForgotPasswordSecretError, ExpiredForgotPasswordError } from "./ResetPasswordError";

export type ResetPasswordResponse = ResetPasswordOutput | InvalidParameterError | NotFoundError | InvalidForgotPasswordError | InvalidForgotPasswordSecretError | ExpiredForgotPasswordError;
