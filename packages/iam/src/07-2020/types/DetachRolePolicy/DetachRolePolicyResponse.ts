import { DetachRolePolicyOutput } from "./DetachRolePolicy";
import { BadRequestError, NotFoundError } from "./DetachRolePolicyError";

export type DetachRolePolicyResponse = DetachRolePolicyOutput | BadRequestError | NotFoundError;
