import { InviteUserOutput } from "./InviteUser";
import { InvalidParameterError, NotFoundError, InvalidEmailError } from "./InviteUserError";

export type InviteUserResponse = InviteUserOutput | InvalidParameterError | NotFoundError | InvalidEmailError;
