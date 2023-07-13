import { AcceptUserInvitationOutput } from "./AcceptUserInvitation";
import { InvalidParameterError, NotFoundError, InvalidInvitationError, ExpiredInvitationError } from "./AcceptUserInvitationError";

export type AcceptUserInvitationResponse = AcceptUserInvitationOutput | InvalidParameterError | NotFoundError | InvalidInvitationError | ExpiredInvitationError;
