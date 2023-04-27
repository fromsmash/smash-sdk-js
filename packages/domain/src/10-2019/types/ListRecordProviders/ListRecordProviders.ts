export interface ListRecordProvidersInput {
    name: string;
}

export interface ListRecordProvidersOutput {
    providers: {
        name: string;
        type: "OpenId" | "Saml";
        idpUrl: string;
        status: "Enabled" | "Disabled";
    }[];
}
