export interface GetAccountInput {}

export interface GetAccountOutput {
    account: {
        id: string;
        token: string;
        region: string;
        created: string;
        username: string;
        firstName: string;
        lastName: string;
        modified: string;
        language: string;
        issuedAt: string;
        removeAt: string;
        expiration: string;
    };
}
