export interface ListUsersInput {}

export interface ListUsersOutput {
    users: {
        id: string;
        username: string;
        status: string;
        firstName: string;
        lastName: string;
        language: string;
        region: string;
        created: string;
        provisioned: string;
        authenticationMode: string;
    }[];
}
