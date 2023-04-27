import { GetPolicyOutput } from "./GetPolicy";
import { InvalidParameterError, NotFoundError } from "./GetPolicyError";

export type GetPolicyResponse = GetPolicyOutput | InvalidParameterError | NotFoundError;
