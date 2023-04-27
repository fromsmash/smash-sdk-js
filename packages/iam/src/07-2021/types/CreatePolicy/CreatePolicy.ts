export interface CreatePolicyInput {
    name: string;
    description?: string;

    statement: {
        action: string[];
        resource: string[];
        effect: "Allow" | "Deny";
    }[];
}

export interface CreatePolicyOutput {
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
