export interface UpdateTeamUserInput {
    teamId: string;
    userId: string;
    username?: string;
    lastName?: string;
    firstName?: string;
    language?: string;
    status?: "Enabled" | "Disabled";
    authenticationMode?: "SSO" | "Standard";
    label?: string;
}

export interface UpdateTeamUserOutput {
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
        label?: string;
    };
}
