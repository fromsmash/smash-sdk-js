import { InviteTeamUserOutput } from "./InviteTeamUser";
import { InvalidParameterError, NotFoundError } from "./InviteTeamUserError";

export type InviteTeamUserResponse = InviteTeamUserOutput | InvalidParameterError | NotFoundError;
