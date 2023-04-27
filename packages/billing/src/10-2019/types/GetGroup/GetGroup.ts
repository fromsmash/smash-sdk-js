export interface GetGroupInput {
    groupId: string;
}

export interface GetGroupOutput {
    group: {
        id: string;
        description: string;
        plans: {
            id: string;
            name: string;
            type: "On Demand" | "Provisionned";
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
        }[];
    };
}
