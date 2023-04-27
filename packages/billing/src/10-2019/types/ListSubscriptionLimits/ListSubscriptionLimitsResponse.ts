import { ListSubscriptionLimitsOutput } from "./ListSubscriptionLimits";
import { NotFoundError } from "./ListSubscriptionLimitsError";

export type ListSubscriptionLimitsResponse = ListSubscriptionLimitsOutput | NotFoundError;
