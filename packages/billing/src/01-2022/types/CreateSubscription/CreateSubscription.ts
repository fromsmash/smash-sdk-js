export interface CreateSubscriptionInput {
    plan?: string;
}

export interface CreateSubscriptionOutput {
    subscription: {
        plan: {
            id: string;
            name: string;
            type: "On Demand" | "Provisionned";
            status: "Disabled" | "Enabled";
            currency: "eur" | "usd";
            duration: string;
            description: string;
            priceExclTax: number;
            priceInclTax: number;
            maxActiveUser: number;
        };
        status: "Payment Required" | "Active" | "Pending" | "Inactive" | "Banned";
        endDate: string;
        startDate: string;
        automaticRenew: boolean;
    };
}
