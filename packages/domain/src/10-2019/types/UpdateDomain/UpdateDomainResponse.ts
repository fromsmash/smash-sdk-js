import { UpdateDomainOutput } from "./UpdateDomain";
import { InvalidParameterError, NotFoundError, InvalidSubscriptionError } from "./UpdateDomainError";

export type UpdateDomainResponse = UpdateDomainOutput | InvalidParameterError | NotFoundError | InvalidSubscriptionError;
