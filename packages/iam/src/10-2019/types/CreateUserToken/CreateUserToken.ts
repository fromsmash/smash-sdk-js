export interface CreateUserTokenInput {
    userId: string;
    tokenDuration?: string;
    refreshTokenDuration?: string;
}

export interface CreateUserTokenOutput {
    user: {
        id: string;
        region: string;
        created: string;
        modified: string;
        username: string;
        language: string;
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
