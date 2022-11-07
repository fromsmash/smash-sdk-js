import { AttachTeamUserOutput } from "./AttachTeamUser";
import { BadRequestError, NotFoundError } from "./AttachTeamUserError";

export type AttachTeamUserResponse = AttachTeamUserOutput | BadRequestError | NotFoundError;
