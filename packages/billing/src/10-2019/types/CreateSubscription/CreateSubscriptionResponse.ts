import { CreateSubscriptionOutput } from "./CreateSubscription";
import { InvalidParameterError, NotFoundError, InvalidPaymentInformationsError, InvalidPlanError } from "./CreateSubscriptionError";

export type CreateSubscriptionResponse = CreateSubscriptionOutput | InvalidParameterError | NotFoundError | InvalidPaymentInformationsError | InvalidPlanError;
