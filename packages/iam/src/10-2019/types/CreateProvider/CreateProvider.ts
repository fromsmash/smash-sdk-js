export interface CreateProviderInput {
    issuer: string;
    name: string;
    type: "Saml" | "OpenId";
    idpUrl: string;
    certificate: string;
    metadata?: string;
    status?: "Enabled" | "Disabled";
}

export interface CreateProviderOutput {
    provider: {
        name: string;
        type: string;
        idpUrl: string;
        issuer: string;
        created: string;
        status: "Enabled" | "Disabled";
        modified: string;
        metadata?: string;
        certificate: string;
    };
}
