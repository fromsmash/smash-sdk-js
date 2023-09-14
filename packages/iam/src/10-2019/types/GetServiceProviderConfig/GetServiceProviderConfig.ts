export interface GetServiceProviderConfigInput {}

export interface GetServiceProviderConfigOutput {
    schemas: string[];

    patch: {
        supported: string;
    };

    bulk: {
        supported: string;
        maxOperations: string;
        maxPayloadSize: string;
    };

    filter: {
        supported: string;
        maxResults: string;
    };

    changePassword: {
        supported: string;
    };

    sort: {
        supported: string;
    };

    etag: {
        supported: string;
    };

    authenticationSchemes: {
        type: string;
        name: string;
        description: string;
    }[];
}
