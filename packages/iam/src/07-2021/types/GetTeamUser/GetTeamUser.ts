export interface GetTeamUserInput {
    teamId: string;
    userId: string;
}

export interface GetTeamUserOutput {
    user: {
        id: string;
        username: string;
        status: string;
        firstName: string;
        lastName: string;
        language: string;
        region: string;
        created: string;
        provisioned: boolean;
        authenticationMode: string;
        roles: {
            name: string;
            description: string;
        }[];
    };
}
