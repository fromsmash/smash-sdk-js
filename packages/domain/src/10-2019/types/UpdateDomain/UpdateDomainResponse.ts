import { UpdateDomainOutput } from "./UpdateDomain";
import { BadRequestError, NotFoundError, ForbiddenToUpdateDomainError } from "./UpdateDomainError";

export type UpdateDomainResponse = UpdateDomainOutput | BadRequestError | NotFoundError | ForbiddenToUpdateDomainError;
