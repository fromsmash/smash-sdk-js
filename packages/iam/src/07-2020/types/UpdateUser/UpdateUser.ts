export interface UpdateUserInput {
    userId: string;
    username?: string;
    lastName?: string;
    firstName?: string;
    language?: string;
    status?: string;
    authenticationMode?: string;
}

export interface UpdateUserOutput {
    user: {
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
    };
}
