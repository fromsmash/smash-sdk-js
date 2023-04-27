export interface InitiateStripePaymentInput {}

export interface InitiateStripePaymentOutput {
    paymentIntent: {
        clientSecret: string;
    };
}
