export interface ListTeamGroupRolesInput {
    teamId: string;
    groupId: string;
}

export interface ListTeamGroupRolesOutput {
    roles: {
        name: string;
        description: string;
    }[];
}
