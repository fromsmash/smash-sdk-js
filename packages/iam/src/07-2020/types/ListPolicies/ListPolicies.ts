export interface ListPoliciesInput {}

export interface ListPoliciesOutput {
    policies: {
        name: string;
        description: string;
        statement: string;
    }[];
}
