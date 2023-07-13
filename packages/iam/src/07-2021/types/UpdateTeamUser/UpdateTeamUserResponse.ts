import { UpdateTeamUserOutput } from "./UpdateTeamUser";
import { InvalidParameterError, NotFoundError, InvalidSubscriptionError, ForbiddenToUpdateProvisionedUserError, ConflictError } from "./UpdateTeamUserError";

export type UpdateTeamUserResponse = UpdateTeamUserOutput | InvalidParameterError | NotFoundError | InvalidSubscriptionError | ForbiddenToUpdateProvisionedUserError | ConflictError;
