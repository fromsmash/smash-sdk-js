import { DeleteDomainOutput } from "./DeleteDomain";
import { InvalidParameterError, NotFoundError } from "./DeleteDomainError";

export type DeleteDomainResponse = DeleteDomainOutput | InvalidParameterError | NotFoundError;
