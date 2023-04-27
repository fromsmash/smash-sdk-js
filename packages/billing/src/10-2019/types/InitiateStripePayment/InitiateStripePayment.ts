export interface InitiateStripePaymentInput {}

export interface InitiateStripePaymentOutput {
    paymentIntent: {
        client_secret: string;
    };
}
