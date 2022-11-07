export interface ListRecordProvidersInput {
    name: string;
}

export interface ListRecordProvidersOutput {
    providers: {
        name: string;
        type: string;
        idpUrl: string;
        status: string;
    }[];
}
