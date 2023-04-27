import { UpdateManagedPolicyOutput } from "./UpdateManagedPolicy";
import { InvalidParameterError, NotFoundError } from "./UpdateManagedPolicyError";

export type UpdateManagedPolicyResponse = UpdateManagedPolicyOutput | InvalidParameterError | NotFoundError;
