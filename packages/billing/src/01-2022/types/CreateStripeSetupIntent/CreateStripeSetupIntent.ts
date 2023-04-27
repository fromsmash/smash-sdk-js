export interface CreateStripeSetupIntentInput {}

export interface CreateStripeSetupIntentOutput {
    setupIntent: {
        clientSecret: string;
        status: "requires_payment_method" | "requires_confirmation" | "requires_action" | "processing" | "requires_capture" | "canceled" | "succeeded";
    };
}
