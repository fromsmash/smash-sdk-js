export interface ListTeamUsersInput {
    teamId: string;
}

export interface ListTeamUsersOutput {
    users: {
        id: string;
        username: string;
        lastName: string;
        firstName: string;
        provisioned: boolean;
        groupsCount: number;
        teamsCount: number;
        status: string;
        label?: string;
    }[];
}
