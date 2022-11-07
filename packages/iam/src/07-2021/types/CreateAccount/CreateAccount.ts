export interface CreateAccountInput {
    username?: string;
    password?: string;
    lastName?: string;
    firstName?: string;
    language?: string;
}

export interface CreateAccountOutput {
    account: {
        id: string;
        username: string;
        region: string;
        lastName: string;
        firstName: string;
        language: string;
        created: string;
        modified: string;
        token: {
            type: string;
            token: string;
            issuedAt: string;
            expiration: string;
        };
        refreshToken: {
            token: string;
            issuedAt: string;
            expiration: string;
        };
    };
}
