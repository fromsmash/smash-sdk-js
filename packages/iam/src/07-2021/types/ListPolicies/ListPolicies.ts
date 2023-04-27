export interface ListPoliciesInput {}

export interface ListPoliciesOutput {
    policies: {
        name: string;
        description: string;
        statement: {
            action: string[];
            effect: "Allow" | "Deny";
            resource: string[];
        }[];
    }[];
}
