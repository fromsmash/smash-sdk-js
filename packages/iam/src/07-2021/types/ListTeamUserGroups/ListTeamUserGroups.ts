export interface ListTeamUserGroupsInput {
    teamId: string;
    userId: string;
}

export interface ListTeamUserGroupsOutput {
    groups: {
        id: string;
        name: string;
        created: string;
        modified: string;
        provisioned: boolean;
    }[];
}
