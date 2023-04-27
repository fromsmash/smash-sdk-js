import { CreateDomainOutput } from "./CreateDomain";
import { InvalidParameterError, InvalidSubscriptionError, DomainAlreadyExistError } from "./CreateDomainError";

export type CreateDomainResponse = CreateDomainOutput | InvalidParameterError | InvalidSubscriptionError | DomainAlreadyExistError;
