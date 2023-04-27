export interface GetInvoiceInput {
    invoiceId: string;
}

export interface GetInvoiceOutput {
    invoice: {
        id: string;
        vat: string;
        url: string;
        date: string;
        provider: "Paypal" | "Stripe";
        amount: number;
        status: "Pending" | "Available";
        number: number;
        percent: number;
        vatRule: "Vat Not Applicable" | "Vat Applicable" | "Reverse Charge" | "Mini One Stop Shop";
        charge: {
            id: string;
            created: string;
        };
        refund: {
            created: string;
        };
        priceInclTax: number;
        priceExclTax: number;
        refundInvoice: string;
        plan: {
            name: string;
            currency: "eur" | "usd";
            duration: string;
            description: string;
            paymentMethods?: {
                stripeCard: {
                    enabled: boolean;
                };
                stripeSepa: {
                    enabled: boolean;
                };
                paypal: {
                    enabled: boolean;
                };
            };
        };
    };
}
