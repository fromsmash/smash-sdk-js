import { CreatePolicyOutput } from "./CreatePolicy";
import { InvalidParameterError, ConflictError } from "./CreatePolicyError";

export type CreatePolicyResponse = CreatePolicyOutput | InvalidParameterError | ConflictError;
