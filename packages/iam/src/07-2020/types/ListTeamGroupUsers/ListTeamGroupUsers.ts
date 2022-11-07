export interface ListTeamGroupUsersInput {
    teamId: string;
    groupId: string;
}

export interface ListTeamGroupUsersOutput {
    users: {
        id: string;
        status: string;
        username: string;
        lastName: string;
        firstName: string;
        provisioned: boolean;
    }[];
}
