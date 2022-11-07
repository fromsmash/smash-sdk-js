export interface GetDomainCustomizationInput {
    domain: string;
}

export interface GetDomainCustomizationOutput {
    customization: {
        domain: string;
        logo: {
            id: string;
            type: string;
            sourceId: string;
            sourceUrl: string;
            thumbnail: string;
        };
        background: {
            id: string;
            type: string;
            sourceId: string;
            sourceUrl: string;
            thumbnail: string;
        };
    };
}
