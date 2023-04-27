import { CreateStripeSetupIntentOutput } from "./CreateStripeSetupIntent";
import { NotFoundError, InvalidPaymentProviderError } from "./CreateStripeSetupIntentError";

export type CreateStripeSetupIntentResponse = CreateStripeSetupIntentOutput | NotFoundError | InvalidPaymentProviderError;
