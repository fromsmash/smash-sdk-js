export interface UpdateRoleInput {
    roleId: string;
    description: string;
}

export interface UpdateRoleOutput {
    role: {
        name: string;
        description: string;
    };
}
