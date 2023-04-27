export interface UpdatePolicyInput {
    policyId: string;
    description?: string;

    statement: {
        action: string[];
        resource: string[];
        effect: "Allow" | "Deny";
    }[];
}

export interface UpdatePolicyOutput {
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
