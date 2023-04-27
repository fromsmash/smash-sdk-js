import { UnsubscribeSubscriptionOutput } from "./UnsubscribeSubscription";
import { InvalidParameterError, NotFoundError } from "./UnsubscribeSubscriptionError";

export type UnsubscribeSubscriptionResponse = UnsubscribeSubscriptionOutput | InvalidParameterError | NotFoundError;
