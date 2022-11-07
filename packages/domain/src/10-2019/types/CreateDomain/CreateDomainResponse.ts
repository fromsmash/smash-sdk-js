import { CreateDomainOutput } from "./CreateDomain";
import { BadRequestError, ForbiddenToCreateDomainError, ConflictError } from "./CreateDomainError";

export type CreateDomainResponse = CreateDomainOutput | BadRequestError | ForbiddenToCreateDomainError | ConflictError;
