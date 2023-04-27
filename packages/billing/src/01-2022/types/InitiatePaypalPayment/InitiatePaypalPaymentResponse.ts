import { InitiatePaypalPaymentOutput } from "./InitiatePaypalPayment";
import { NotFoundError, InvalidPaymentInformationsError, InvalidSubscriptionError, NoPaymentRequiredError } from "./InitiatePaypalPaymentError";

export type InitiatePaypalPaymentResponse = InitiatePaypalPaymentOutput | NotFoundError | InvalidPaymentInformationsError | InvalidSubscriptionError | NoPaymentRequiredError;
