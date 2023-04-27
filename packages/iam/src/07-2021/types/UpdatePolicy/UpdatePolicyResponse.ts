import { UpdatePolicyOutput } from "./UpdatePolicy";
import { InvalidParameterError, NotFoundError } from "./UpdatePolicyError";

export type UpdatePolicyResponse = UpdatePolicyOutput | InvalidParameterError | NotFoundError;
