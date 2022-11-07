import { SSOSignInOutput } from "./SSOSignIn";
import { BadRequestError, ConflictError } from "./SSOSignInError";

export type SSOSignInResponse = SSOSignInOutput | BadRequestError | ConflictError;
