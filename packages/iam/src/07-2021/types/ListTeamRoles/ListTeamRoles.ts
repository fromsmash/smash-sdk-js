export interface ListTeamRolesInput {
    teamId: string;
}

export interface ListTeamRolesOutput {
    roles: {
        name: string;
        description: string;
    }[];
}
