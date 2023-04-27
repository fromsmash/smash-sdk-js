export interface ExecuteStripePaymentInput {
    paymentIntentId: string;
}

export interface ExecuteStripePaymentOutput {
    payment: {
        status: "Success" | "Failure";
    };
}
