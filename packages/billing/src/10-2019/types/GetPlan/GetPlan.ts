export interface GetPlanInput {
    planId: string;
}

export interface GetPlanOutput {
    plan: {
        id: string;
        name: string;
        type: "On Demand" | "Provisionned";
        status: "Disabled" | "Enabled";
        currency: "eur" | "usd";
        duration: string;
        renewable: boolean;
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
        tags?: string[];
    };
}
