export interface UpdateTeamInput {
    teamId: string;
    name?: string;
    description?: string;
    config?: {
        authentication?: {
            mode: string;
            rules?: string[];
        };
    };
}

export interface UpdateTeamOutput {
    team: {
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
    };
}
