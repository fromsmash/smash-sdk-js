import { ListProvidersOutput } from "./ListProviders";
import { BadRequestError } from "./ListProvidersError";

export type ListProvidersResponse = ListProvidersOutput | BadRequestError;
