export interface ListTeamsInput {}

export interface ListTeamsOutput {
    teams: {
        id: string;
        name?: string;
        domain?: string;
        config: {
            authentication: {
                mode: "Anonymous" | "Authentified";
                rules?: {
                    type: "Wildcard" | "Email";
                    value: string;
                }[];
            };
        };
        created: string;
        modified: string;
        usersCount: number;
        groupsCount: number;
        description?: string;
        groupsUsersCount: number;
    }[];
}
