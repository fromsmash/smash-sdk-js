export interface ListTeamUsersInput {
    teamId: string;
}

export interface ListTeamUsersOutput {
    users: {
        id: string;
        username: string;
        lastName: string;
        firstName: string;
        provisioned: string;
        label?: string;
    }[];
}
