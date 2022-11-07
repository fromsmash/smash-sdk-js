import { SamlSignOnOutput } from "./SamlSignOn";
import { BadRequestError, NotFoundError, WrongConfigError, ConflictError } from "./SamlSignOnError";

export type SamlSignOnResponse = SamlSignOnOutput | BadRequestError | NotFoundError | WrongConfigError | ConflictError;
