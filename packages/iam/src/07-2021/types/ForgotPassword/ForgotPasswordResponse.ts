import { ForgotPasswordOutput } from "./ForgotPassword";
import { InvalidParameterError, NotFoundError, InvalidIdentityUsernameError } from "./ForgotPasswordError";

export type ForgotPasswordResponse = ForgotPasswordOutput | InvalidParameterError | NotFoundError | InvalidIdentityUsernameError;
