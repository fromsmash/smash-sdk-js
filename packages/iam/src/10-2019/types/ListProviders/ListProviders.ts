export interface ListProvidersInput {}

export interface ListProvidersOutput {
    providers: {
        name: string;
        type: string;
        idpUrl: string;
        issuer: string;
        status: "Enabled" | "Disabled";
        created: string;
        metadata?: string;
        modified: string;
        certificate: string;
    }[];
}
