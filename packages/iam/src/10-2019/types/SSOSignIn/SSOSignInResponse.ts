import { SSOSignInOutput } from "./SSOSignIn";
import { InvalidParameterError, NotFoundError, ConflictError } from "./SSOSignInError";

export type SSOSignInResponse = SSOSignInOutput | InvalidParameterError | NotFoundError | ConflictError;
