import { UpdatePolicyOutput } from "./UpdatePolicy";
import { BadRequestError, NotFoundError } from "./UpdatePolicyError";

export type UpdatePolicyResponse = UpdatePolicyOutput | BadRequestError | NotFoundError;
