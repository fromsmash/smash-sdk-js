import { InviteUserOutput } from "./InviteUser";
import { InvalidParameterError, NotFoundError } from "./InviteUserError";

export type InviteUserResponse = InviteUserOutput | InvalidParameterError | NotFoundError;
