import { ListDomainsOutput } from "./ListDomains";
import { BadRequestError } from "./ListDomainsError";

export type ListDomainsResponse = ListDomainsOutput | BadRequestError;
