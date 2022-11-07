export interface GetTeamGroupInput {
    teamId: string;
    groupId: string;
}

export interface GetTeamGroupOutput {
    group: {
        id: string;
        name: string;
        created: string;
        modified: string;
        usersCount: number;
        provisioned: boolean;
    };
}
