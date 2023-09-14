export interface UpdateProviderInput {
    name: string;
    idpUrl: string;
    certificate: string;
    status?: string;
}

export interface UpdateProviderOutput {
    provider: {
        name: string;
        type: "Saml" | "OpenId";
        idpUrl: string;
        issuer: string;
        created: string;
        modified: string;
        metadata?: string;
        certificate: string;
        status: "Enabled" | "Disabled";
    };
}
