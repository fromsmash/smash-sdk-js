export interface GetStripePaymentMethodInput {}

export interface GetStripePaymentMethodOutput {
    paymentMethod: {
        type: string;
        last4: number;
        expiryDate: string;
    };
}
