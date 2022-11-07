import { AcceptInvitationOutput } from "./AcceptInvitation";
import { BadRequestError, InvalidSecretError, InvalidInviteError, ExpiredSecretError } from "./AcceptInvitationError";

export type AcceptInvitationResponse = AcceptInvitationOutput | BadRequestError | InvalidSecretError | InvalidInviteError | ExpiredSecretError;
