export interface GetProviderInput {
    name: string;
}

export interface GetProviderOutput {
    provider: {
        name: string;
        type: string;
        idpUrl: string;
        issuer: string;
        status: "Enabled" | "Disabled";
        created: string;
        modified: string;
        metadata?: string;
        certificate: string;
    };
}
