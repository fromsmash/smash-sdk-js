import { GetDomainOutput } from "./GetDomain";
import { BadRequestError, NotFoundError } from "./GetDomainError";

export type GetDomainResponse = GetDomainOutput | BadRequestError | NotFoundError;
