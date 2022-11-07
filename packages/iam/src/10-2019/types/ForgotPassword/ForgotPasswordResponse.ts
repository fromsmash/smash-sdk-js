import { ForgotPasswordOutput } from "./ForgotPassword";
import { BadRequestError } from "./ForgotPasswordError";

export type ForgotPasswordResponse = ForgotPasswordOutput | BadRequestError;
