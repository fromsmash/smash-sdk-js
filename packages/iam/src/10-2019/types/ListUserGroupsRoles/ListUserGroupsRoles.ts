export interface ListUserGroupsRolesInput {
    userId: string;
}

export interface ListUserGroupsRolesOutput {
    roles: {
        name: string;
        description: string;
    }[];
}
