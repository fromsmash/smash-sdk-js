export interface ListUsersInput {}

export interface ListUsersOutput {
    users: {
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
    }[];
}
