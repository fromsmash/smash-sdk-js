import { AttachRolePolicyOutput } from "./AttachRolePolicy";
import { BadRequestError, NotFoundError } from "./AttachRolePolicyError";

export type AttachRolePolicyResponse = AttachRolePolicyOutput | BadRequestError | NotFoundError;
