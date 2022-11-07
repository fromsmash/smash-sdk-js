export interface CreateUserInput {
    username?: string;
    password?: string;
    lastName?: string;
    firstName?: string;
    language?: string;
    status?: string;
    authenticationMode?: string;
}

export interface CreateUserOutput {
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
    };
}
