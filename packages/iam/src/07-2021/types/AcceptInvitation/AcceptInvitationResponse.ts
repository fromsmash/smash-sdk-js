import { AcceptInvitationOutput } from "./AcceptInvitation";
import { InvalidParameterError, NotFoundError, InvalidInvitationError, InvalidInvitationSecretError, ExpiredInvitationError } from "./AcceptInvitationError";

export type AcceptInvitationResponse = AcceptInvitationOutput | InvalidParameterError | NotFoundError | InvalidInvitationError | InvalidInvitationSecretError | ExpiredInvitationError;
