import { CreateSubscriptionOutput } from "./CreateSubscription";
import { InvalidParameterError, NotFoundError, InvalidPaymentInformationsError, InvalidSubscriptionPlanError, InvalidTrialPlanError } from "./CreateSubscriptionError";

export type CreateSubscriptionResponse = CreateSubscriptionOutput | InvalidParameterError | NotFoundError | InvalidPaymentInformationsError | InvalidSubscriptionPlanError | InvalidTrialPlanError;
