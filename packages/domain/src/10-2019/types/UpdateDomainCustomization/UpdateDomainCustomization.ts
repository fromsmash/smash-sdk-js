export interface UpdateDomainCustomizationInput {
    domain: string;
    logo?: string;
    background?: string;
}

export interface UpdateDomainCustomizationOutput {
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
