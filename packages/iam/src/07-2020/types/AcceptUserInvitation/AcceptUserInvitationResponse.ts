import { AcceptUserInvitationOutput } from "./AcceptUserInvitation";
import { InvalidParameterError, NotFoundError, InvalidSecretError, InvalidInviteError, ExpiredSecretError } from "./AcceptUserInvitationError";

export type AcceptUserInvitationResponse = AcceptUserInvitationOutput | InvalidParameterError | NotFoundError | InvalidSecretError | InvalidInviteError | ExpiredSecretError;
