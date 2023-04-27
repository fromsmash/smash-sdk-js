export interface CreateTokenInput {
    username: string;
    password: string;
}

export interface CreateTokenOutput {
    identity: {
        id: string;
        region: "eu-west-1" | "eu-west-2" | "eu-west-3" | "eu-central-1" | "us-east-1" | "us-east-2" | "us-west-1" | "us-west-2" | "ca-central-1" | "global";
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
