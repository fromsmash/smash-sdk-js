export interface CreateTeamInput {
    name?: string;
    description?: string;
    domain?: string;
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

export interface CreateTeamOutput {
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
