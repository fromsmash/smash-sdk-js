import { UpdateManagedPolicyOutput } from "./UpdateManagedPolicy";
import { BadRequestError, NotFoundError } from "./UpdateManagedPolicyError";

export type UpdateManagedPolicyResponse = UpdateManagedPolicyOutput | BadRequestError | NotFoundError;
