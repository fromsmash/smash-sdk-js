export interface ListGroupsInput {}

export interface ListGroupsOutput {
    groups: {
        id: string;
        name: string;
        created: string;
        modified: string;
        usersCount: number;
        provisioned: boolean;
    }[];
}
