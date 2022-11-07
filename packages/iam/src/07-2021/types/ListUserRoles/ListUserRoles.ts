export interface ListUserRolesInput {
    userId: string;
}

export interface ListUserRolesOutput {
    roles: {
        name: string;
        description: string;
    }[];
}
