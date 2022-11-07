export interface ListGroupUsersInput {
    groupId: string;
}

export interface ListGroupUsersOutput {
    users: {
        id: string;
        status: string;
        username: string;
        lastName: string;
        firstName: string;
        provisioned: string;
    }[];
}
