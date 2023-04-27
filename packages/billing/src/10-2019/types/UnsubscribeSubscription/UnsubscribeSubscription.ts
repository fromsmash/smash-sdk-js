export interface UnsubscribeSubscriptionInput {
    reasonType?: "NOT_NEEDED_ANYMORE" | "TOO_SLOW" | "OTHER";
    description?: string;
}

export interface UnsubscribeSubscriptionOutput {
    subscription: {
        plan: string;
        status: "Payment Required" | "Active" | "Pending" | "Inactive" | "Banned";
        endDate: string;
        startDate: string;
        automaticRenew: boolean;
    };
}
