import { CreateEmailChallengeOutput } from "./CreateEmailChallenge";
import { InvalidParameterError, NotificationAlreadySentError, ChallengeAlreadyExistError } from "./CreateEmailChallengeError";

export type CreateEmailChallengeResponse = CreateEmailChallengeOutput | InvalidParameterError | NotificationAlreadySentError | ChallengeAlreadyExistError;
