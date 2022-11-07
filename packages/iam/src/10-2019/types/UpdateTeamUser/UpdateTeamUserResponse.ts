import { UpdateTeamUserOutput } from "./UpdateTeamUser";
import { BadRequestError, NotFoundError, WrongAuthError } from "./UpdateTeamUserError";

export type UpdateTeamUserResponse = UpdateTeamUserOutput | BadRequestError | NotFoundError | WrongAuthError;
