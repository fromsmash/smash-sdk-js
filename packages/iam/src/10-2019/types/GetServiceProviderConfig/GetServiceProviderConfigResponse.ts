import { GetServiceProviderConfigOutput } from "./GetServiceProviderConfig";
import { BadRequestError } from "./GetServiceProviderConfigError";

export type GetServiceProviderConfigResponse = GetServiceProviderConfigOutput | BadRequestError;
