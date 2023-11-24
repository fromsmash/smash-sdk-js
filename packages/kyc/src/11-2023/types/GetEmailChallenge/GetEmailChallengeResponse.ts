import { GetEmailChallengeOutput } from "./GetEmailChallenge";
import { InvalidParameterError, NotFoundError } from "./GetEmailChallengeError";

export type GetEmailChallengeResponse = GetEmailChallengeOutput | InvalidParameterError | NotFoundError;
