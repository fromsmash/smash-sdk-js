export interface UpdateTeamInput {
    teamId: string;
    name?: string;
    description?: string;
    config?: {
        authentication?: {
            mode: "Anonymous" | "Authentified";
            rules?: {
                type: "Wilcard" | "Email";
                value: string;
            }[];
        };
    };
}

export interface UpdateTeamOutput {
    team: {
        id: string;
        name?: string;
        domain?: string;
        config: {
            authentication: {
                mode: "Anonymous" | "Authentified";
                rules?: {
                    type: "Wilcard" | "Email";
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
    };
}
