export interface CreateTeamInput {
    name?: string;
    description?: string;
    domain?: string;
    config?: {
        authentication?: {
            mode: string;
            rules?: string[];
        };
    };
}

export interface CreateTeamOutput {
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
