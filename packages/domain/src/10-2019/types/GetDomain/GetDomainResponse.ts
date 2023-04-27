import { GetDomainOutput } from "./GetDomain";
import { InvalidParameterError, NotFoundError } from "./GetDomainError";

export type GetDomainResponse = GetDomainOutput | InvalidParameterError | NotFoundError;
