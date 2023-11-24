import { UpdateEmailChallengeOutput } from "./UpdateEmailChallenge";
import { InvalidParameterError, InvalidTokenError } from "./UpdateEmailChallengeError";

export type UpdateEmailChallengeResponse = UpdateEmailChallengeOutput | InvalidParameterError | InvalidTokenError;
