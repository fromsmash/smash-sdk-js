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
            statement: string;
        }[];
    };
}
