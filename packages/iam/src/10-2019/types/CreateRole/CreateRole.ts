export interface CreateRoleInput {
    name: string;
    description?: string;
}

export interface CreateRoleOutput {
    role: {
        name: string;
        description: string;
    };
}
