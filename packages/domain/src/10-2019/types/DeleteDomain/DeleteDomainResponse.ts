import { DeleteDomainOutput } from "./DeleteDomain";
import { BadRequestError, NotFoundError } from "./DeleteDomainError";

export type DeleteDomainResponse = DeleteDomainOutput | BadRequestError | NotFoundError;
