export interface CreateSubscriptionInput {
    plan?: string;
}

export interface CreateSubscriptionOutput {
    subscription: {
        plan: string;
        status: "Payment Required" | "Active" | "Pending" | "Inactive" | "Banned";
        endDate: string;
        startDate: string;
        automaticRenew: boolean;
    };
}
