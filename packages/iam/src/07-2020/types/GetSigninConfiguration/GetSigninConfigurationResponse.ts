import { GetSigninConfigurationOutput } from "./GetSigninConfiguration";
import { InvalidParameterError, NotFoundError } from "./GetSigninConfigurationError";

export type GetSigninConfigurationResponse = GetSigninConfigurationOutput | InvalidParameterError | NotFoundError;
