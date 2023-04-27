export interface GetDomainCustomizationInput {
    domainId: string;
}

export interface GetDomainCustomizationOutput {
    customization: {
        domain: string;
        logo: {
            id: string;
            type: "Image";
            sourceId: string;
            sourceUrl: string;
            thumbnail: string;
        };
        background: {
            id: string;
            type: "Image" | "Youtube" | "Vimeo";
            sourceId: string;
            sourceUrl: string;
            thumbnail: string;
        };
    };
}
