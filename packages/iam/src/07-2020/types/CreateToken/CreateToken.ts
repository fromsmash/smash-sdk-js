export interface CreateTokenInput {
    username: string;
    password: string;
}

export interface CreateTokenOutput {
    identity: {
        id: string;
        region: string;
        created: string;
        modified: string;
        username: string;
        firstName: string;
        lastName: string;
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
