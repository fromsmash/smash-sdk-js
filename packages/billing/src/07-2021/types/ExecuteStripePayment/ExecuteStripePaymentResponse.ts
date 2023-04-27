import { ExecuteStripePaymentOutput } from "./ExecuteStripePayment";
import { InvalidParameterError, NotFoundError, InvalidPaymentProviderError, ConflictError } from "./ExecuteStripePaymentError";

export type ExecuteStripePaymentResponse = ExecuteStripePaymentOutput | InvalidParameterError | NotFoundError | InvalidPaymentProviderError | ConflictError;
