import { ListPoliciesOutput } from "./ListPolicies";
import { BadRequestError } from "./ListPoliciesError";

export type ListPoliciesResponse = ListPoliciesOutput | BadRequestError;
