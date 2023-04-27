import { GetStripePaymentMethodOutput } from "./GetStripePaymentMethod";
import { NotFoundError, InvalidModeOrPaymentProviderError } from "./GetStripePaymentMethodError";

export type GetStripePaymentMethodResponse = GetStripePaymentMethodOutput | NotFoundError | InvalidModeOrPaymentProviderError;
