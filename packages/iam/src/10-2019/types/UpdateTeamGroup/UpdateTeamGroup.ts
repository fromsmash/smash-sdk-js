export interface UpdateTeamGroupInput {
    teamId: string;
    groupId: string;
    name?: string;
}

export interface UpdateTeamGroupOutput {
    group: {
        id: string;
        name: string;
        created: string;
        modified: string;
        usersCount: string;
        provisioned: boolean;
    };
}
