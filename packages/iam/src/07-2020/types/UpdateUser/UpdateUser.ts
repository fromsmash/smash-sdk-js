export interface UpdateUserInput {
    userId: string;
    username?: string;
    lastName?: string;
    firstName?: string;
    language?: string;
    status?: "Enabled" | "Disabled";
    authenticationMode?: "SSO" | "Standard";
    label?: string;
}

export interface UpdateUserOutput {
    user: {
        id: string;
        username: string;
        status: "Enabled" | "Disabled";
        firstName: string;
        lastName: string;
        language: string;
        region: string;
        created: string;
        provisioned: string;
        authenticationMode: "SSO" | "Standard";
        label?: string;
    };
}
