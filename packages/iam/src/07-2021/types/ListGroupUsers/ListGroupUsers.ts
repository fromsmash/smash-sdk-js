export interface ListGroupUsersInput {
    groupId: string;
}

export interface ListGroupUsersOutput {
    users: {
        id: string;
        status: "Enabled" | "Disabled";
        username: string;
        lastName: string;
        firstName: string;
        provisioned: boolean;
    }[];
}
