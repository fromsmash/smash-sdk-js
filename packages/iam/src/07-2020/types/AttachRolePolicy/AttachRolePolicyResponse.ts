import { AttachRolePolicyOutput } from "./AttachRolePolicy";
import { InvalidParameterError, NotFoundError, ConflictError } from "./AttachRolePolicyError";

export type AttachRolePolicyResponse = AttachRolePolicyOutput | InvalidParameterError | NotFoundError | ConflictError;
