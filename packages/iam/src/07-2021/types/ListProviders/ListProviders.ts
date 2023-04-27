export interface ListProvidersInput {}

export interface ListProvidersOutput {
    providers: {
        name: string;
        type: string;
        idpUrl: string;
        issuer: string;
        status: string;
        created: string;
        metadata?: string;
        modified: string;
        certificate: string;
    }[];
}
