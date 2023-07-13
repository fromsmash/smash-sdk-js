import { UpdateUserOutput } from "./UpdateUser";
import { InvalidParameterError, NotFoundError, ForbiddenToUpdateProvisionedUserError, InvalidSubscriptionError } from "./UpdateUserError";

export type UpdateUserResponse = UpdateUserOutput | InvalidParameterError | NotFoundError | ForbiddenToUpdateProvisionedUserError | InvalidSubscriptionError;
