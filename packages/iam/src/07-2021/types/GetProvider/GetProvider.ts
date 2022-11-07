export interface GetProviderInput {
    name: string;
}

export interface GetProviderOutput {
    provider: {
        name: string;
        type: string;
        idpUrl: string;
        issuer: string;
        status: string;
        created: string;
        modified: string;
        metadata?: string;
        certificate: string;
    };
}
