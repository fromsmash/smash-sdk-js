import { ForgotPasswordOutput } from "./ForgotPassword";
import { InvalidParameterError } from "./ForgotPasswordError";

export type ForgotPasswordResponse = ForgotPasswordOutput | InvalidParameterError;
