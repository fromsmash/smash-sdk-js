export interface ListTeamGroupsInput {
    teamId: string;
}

export interface ListTeamGroupsOutput {
    groups: {
        id: string;
        name: string;
        created: string;
        modified: string;
        usersCount: number;
    }[];
}
