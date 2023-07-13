import { SamlSignOnOutput } from "./SamlSignOn";
import { InvalidParameterError, NotFoundError, UserNotAllowedToSignOnError, ConflictError } from "./SamlSignOnError";

export type SamlSignOnResponse = SamlSignOnOutput | InvalidParameterError | NotFoundError | UserNotAllowedToSignOnError | ConflictError;
