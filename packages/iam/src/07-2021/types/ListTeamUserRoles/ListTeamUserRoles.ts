export interface ListTeamUserRolesInput {
    teamId: string;
    userId: string;
}

export interface ListTeamUserRolesOutput {
    roles: {
        name: string;
        description: string;
    }[];
}
