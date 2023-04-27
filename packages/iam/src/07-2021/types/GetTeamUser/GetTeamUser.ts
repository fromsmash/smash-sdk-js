export interface GetTeamUserInput {
    teamId: string;
    userId: string;
}

export interface GetTeamUserOutput {
    user: {
        id: string;
        username: string;
        status: "Enabled" | "Disabled";
        firstName: string;
        lastName: string;
        language: string;
        region: string;
        created: string;
        provisioned: boolean;
        authenticationMode: "SSO" | "Standard";
        roles: {
            name: string;
            description: string;
        }[];
        label?: string;
    };
}
