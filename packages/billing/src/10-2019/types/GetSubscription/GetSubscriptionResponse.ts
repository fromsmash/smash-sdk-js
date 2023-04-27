import { GetSubscriptionOutput } from "./GetSubscription";
import { NotFoundError } from "./GetSubscriptionError";

export type GetSubscriptionResponse = GetSubscriptionOutput | NotFoundError;
