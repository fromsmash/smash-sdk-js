import { AcceptInvitationOutput } from "./AcceptInvitation";
import { InvalidParameterError, InvalidSecretError, InvalidInviteError, ExpiredSecretError } from "./AcceptInvitationError";

export type AcceptInvitationResponse = AcceptInvitationOutput | InvalidParameterError | InvalidSecretError | InvalidInviteError | ExpiredSecretError;
