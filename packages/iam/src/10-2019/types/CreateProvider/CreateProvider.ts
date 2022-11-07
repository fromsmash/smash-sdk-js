export interface CreateProviderInput {
    issuer: string;
    name: string;
    type: string;
    idpUrl: string;
    certificate: string;
    metadata?: string;
    status?: string;
}

export interface CreateProviderOutput {
    provider: {
        name: string;
        type: string;
        idpUrl: string;
        issuer: string;
        created: string;
        modified: string;
        metadata?: string;
        certificate: string;
    };
}
