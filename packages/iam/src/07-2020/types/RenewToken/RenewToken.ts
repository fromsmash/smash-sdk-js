export interface RenewTokenInput {
    refreshToken: string;
}

export interface RenewTokenOutput {
    identity: {
        id: string;
        username: string;
        region: string;
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
