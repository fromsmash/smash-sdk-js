export interface GetRoleInput {
    roleId: string;
}

export interface GetRoleOutput {
    role: {
        name: string;
        description: string;
        policies: {
            name: string;
            description: string;
            statement: {
                action: string[];
                effect: "Allow" | "Deny";
                resource: string[];
            }[];
        }[];
    };
}
