export interface ListTeamsInput {}

export interface ListTeamsOutput {
    teams: {
        id: string;
        name?: string;
        domain?: string;
        config: string;
        created: string;
        modified: string;
        usersCount: number;
        groupsCount: number;
        description?: string;
        groupsUsersCount: number;
    }[];
}
