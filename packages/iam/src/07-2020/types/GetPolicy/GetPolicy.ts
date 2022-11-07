export interface GetPolicyInput {
    policyId: string;
}

export interface GetPolicyOutput {
    policy: {
        name: string;
        description: string;
        statement: string;
    };
}
