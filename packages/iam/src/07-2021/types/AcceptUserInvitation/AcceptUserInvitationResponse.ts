import { AcceptUserInvitationOutput } from "./AcceptUserInvitation";
import { BadRequestError, InvalidSecretError, InvalidInviteError, ExpiredSecretError } from "./AcceptUserInvitationError";

export type AcceptUserInvitationResponse = AcceptUserInvitationOutput | BadRequestError | InvalidSecretError | InvalidInviteError | ExpiredSecretError;
