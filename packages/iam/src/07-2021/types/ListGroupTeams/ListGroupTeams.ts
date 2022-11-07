export interface ListGroupTeamsInput {
    groupId: string;
}

export interface ListGroupTeamsOutput {
    teams: {
        id: string;
        name: string;
        domain: string;
        created: string;
        modified: string;
        usersCount: number;
        groupsCount: number;
        description: string;
        groupsUsersCount: number;
    }[];
}
