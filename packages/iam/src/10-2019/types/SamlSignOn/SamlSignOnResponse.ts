import { SamlSignOnOutput } from "./SamlSignOn";
import { InvalidParameterError, NotFoundError, InvalidConfigurationError, ConflictError } from "./SamlSignOnError";

export type SamlSignOnResponse = SamlSignOnOutput | InvalidParameterError | NotFoundError | InvalidConfigurationError | ConflictError;
