export interface UpdateManagedPolicyInput {
    policyId: string;
    description?: string;

    statement: {
        action: string[];
        resource: string[];
        effect: "Allow" | "Deny";
    }[];
}

export interface UpdateManagedPolicyOutput {
    policy: {
        name: string;
        description: string;
        statement: {
            action: string[];
            effect: "Allow" | "Deny";
            resource: string[];
        }[];
    };
}
