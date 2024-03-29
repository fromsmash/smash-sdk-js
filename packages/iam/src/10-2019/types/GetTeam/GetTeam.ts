export interface GetTeamInput {
    teamId: string;
}

export interface GetTeamOutput {
    team: {
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
        users: {
            id: string;
            username: string;
            lastName: string;
            firstName: string;
        }[];
    };
}
