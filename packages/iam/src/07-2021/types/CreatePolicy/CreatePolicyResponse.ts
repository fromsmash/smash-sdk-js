import { CreatePolicyOutput } from "./CreatePolicy";
import { BadRequestError, ConflictError } from "./CreatePolicyError";

export type CreatePolicyResponse = CreatePolicyOutput | BadRequestError | ConflictError;
