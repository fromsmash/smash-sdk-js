export interface UpdateManagedPolicyInput {
    policyId: string;
    description?: string;

    statement: {
        action: string[];
        resource: string[];
        effect: string;
    }[];
}

export interface UpdateManagedPolicyOutput {
    policy: {
        name: string;
        description: string;
        statement: string;
    };
}
