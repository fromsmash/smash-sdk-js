import { GetSigninConfigurationOutput } from "./GetSigninConfiguration";
import { BadRequestError, NotFoundError } from "./GetSigninConfigurationError";

export type GetSigninConfigurationResponse = GetSigninConfigurationOutput | BadRequestError | NotFoundError;
