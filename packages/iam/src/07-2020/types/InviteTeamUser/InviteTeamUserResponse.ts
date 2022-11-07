import { InviteTeamUserOutput } from "./InviteTeamUser";
import { BadRequestError, NotFoundError } from "./InviteTeamUserError";

export type InviteTeamUserResponse = InviteTeamUserOutput | BadRequestError | NotFoundError;
