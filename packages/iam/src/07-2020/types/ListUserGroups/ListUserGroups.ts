export interface ListUserGroupsInput {
    userId: string;
}

export interface ListUserGroupsOutput {
    groups: {
        id: string;
        name: string;
        created: string;
        modified: string;
        provisioned: boolean;
    }[];
}
