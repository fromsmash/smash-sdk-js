import { ForgotPasswordOutput } from "./ForgotPassword";
import { InvalidParameterError, NotFoundError } from "./ForgotPasswordError";

export type ForgotPasswordResponse = ForgotPasswordOutput | InvalidParameterError | NotFoundError;
