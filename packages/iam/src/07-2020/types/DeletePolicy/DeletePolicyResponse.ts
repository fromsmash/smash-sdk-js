import { DeletePolicyOutput } from "./DeletePolicy";
import { BadRequestError, NotFoundError } from "./DeletePolicyError";

export type DeletePolicyResponse = DeletePolicyOutput | BadRequestError | NotFoundError;
