import { UpdateTeamUserOutput } from "./UpdateTeamUser";
import { InvalidParameterError, NotFoundError, WrongAuthError } from "./UpdateTeamUserError";

export type UpdateTeamUserResponse = UpdateTeamUserOutput | InvalidParameterError | NotFoundError | WrongAuthError;
