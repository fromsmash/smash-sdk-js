export interface UpdatePolicyInput {
    policyId: string;
    description?: string;

    statement: {
        action: string[];
        resource: string[];
        effect: string;
    }[];
}

export interface UpdatePolicyOutput {
    policy: {
        name: string;
        description: string;
        statement: string;
    };
}
