export interface ListUserGroupsTeamsInput {
    userId: string;
}

export interface ListUserGroupsTeamsOutput {
    teams: {
        id: string;
        name: string;
        created: string;
        modified: string;
        domain: string;
        description: string;
    }[];
}
