export interface ListUserTeamsInput {
    userId: string;
}

export interface ListUserTeamsOutput {
    teams: {
        id: string;
        name: string;
        domain: string;
        created: string;
        modified: string;
        description: string;
    }[];
}
