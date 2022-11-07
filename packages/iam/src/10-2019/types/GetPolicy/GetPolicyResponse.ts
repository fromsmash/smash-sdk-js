import { GetPolicyOutput } from "./GetPolicy";
import { BadRequestError, NotFoundError } from "./GetPolicyError";

export type GetPolicyResponse = GetPolicyOutput | BadRequestError | NotFoundError;
