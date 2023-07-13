export interface ListTeamGroupUsersInput {
    teamId: string;
    groupId: string;
}

export interface ListTeamGroupUsersOutput {
    users: {
        id: string;
        status: "Enabled" | "Disabled";
        username: string;
        lastName: string;
        firstName: string;
        provisioned: boolean;
    }[];
}
