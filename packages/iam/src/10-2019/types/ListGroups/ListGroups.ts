export interface ListGroupsInput {}

export interface ListGroupsOutput {
    groups: {
        id: string;
        name: string;
        created: string;
        modified: string;
        usersCount: string;
        provisioned: string;
    }[];
}
