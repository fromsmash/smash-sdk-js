import { InviteUserOutput } from "./InviteUser";
import { BadRequestError, NotFoundError } from "./InviteUserError";

export type InviteUserResponse = InviteUserOutput | BadRequestError | NotFoundError;
