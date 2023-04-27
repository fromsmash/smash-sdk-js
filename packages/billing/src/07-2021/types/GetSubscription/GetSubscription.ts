export interface GetSubscriptionInput {}

export interface GetSubscriptionOutput {
    subscription: {
        plan: {
            id: string;
            name: string;
            type: "On Demand" | "Provisionned";
            status: "Disabled" | "Enabled";
            currency: "eur" | "usd";
            duration: string;
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
            description: string;
            priceExclTax: number;
            priceInclTax: number;
            maxActiveUser: number;
        };
        status: "Payment Required" | "Active" | "Pending" | "Inactive" | "Banned";
        endDate: string;
        startDate: string;
        automaticRenew: boolean;
        mode: "Offline" | "Online" | "Free Trial" | "Free Licence";
        provider: "Paypal" | "Stripe";
    };
}
