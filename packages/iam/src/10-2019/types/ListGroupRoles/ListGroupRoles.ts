export interface ListGroupRolesInput {
    groupId: string;
}

export interface ListGroupRolesOutput {
    roles: {
        name: string;
        description: string;
    }[];
}
