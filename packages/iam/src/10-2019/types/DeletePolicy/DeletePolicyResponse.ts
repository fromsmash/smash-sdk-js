import { DeletePolicyOutput } from "./DeletePolicy";
import { InvalidParameterError, NotFoundError, ForbiddenError } from "./DeletePolicyError";

export type DeletePolicyResponse = DeletePolicyOutput | InvalidParameterError | NotFoundError | ForbiddenError;
