import { InitiateStripePaymentOutput } from "./InitiateStripePayment";
import { NotFoundError, InvalidPaymentInformationsError, InvalidSubscriptionError, NoPaymentRequiredError } from "./InitiateStripePaymentError";

export type InitiateStripePaymentResponse = InitiateStripePaymentOutput | NotFoundError | InvalidPaymentInformationsError | InvalidSubscriptionError | NoPaymentRequiredError;
