import { DetachRolePolicyOutput } from "./DetachRolePolicy";
import { InvalidParameterError, NotFoundError } from "./DetachRolePolicyError";

export type DetachRolePolicyResponse = DetachRolePolicyOutput | InvalidParameterError | NotFoundError;
