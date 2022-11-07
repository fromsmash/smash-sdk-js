export interface SamlSignOnInput {
    SAMLResponse: string;
    RelayState?: string;
}

export interface SamlSignOnOutput {
    identity: {
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
