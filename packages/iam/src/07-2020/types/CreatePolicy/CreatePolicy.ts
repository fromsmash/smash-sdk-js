export interface CreatePolicyInput {
    name: string;
    description?: string;

    statement: {
        action: string[];
        resource: string[];
        effect: string;
    }[];
}

export interface CreatePolicyOutput {
    policy: {
        name: string;
        description: string;
        statement: string;
    };
}
