import { SSOSignInOutput } from "./SSOSignIn";
import { InvalidParameterError, ConflictError } from "./SSOSignInError";

export type SSOSignInResponse = SSOSignInOutput | InvalidParameterError | ConflictError;
