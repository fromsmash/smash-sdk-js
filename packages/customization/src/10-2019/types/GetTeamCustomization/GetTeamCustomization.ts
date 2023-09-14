export interface GetTeamCustomizationInput {
    teamId: string;
    customizationId: string;
}

export interface GetTeamCustomizationOutput {
    customization: {
        id: string;
        logo: {
            id: string;
            type: "Image" | "Youtube" | "Vimeo";
            sourceId: string;
            thumbnail: string;
            sourceUrl: string;
        };
        background: {
            id: string;
            type: "Image" | "Youtube" | "Vimeo";
            sourceId: string;
            thumbnail: string;
            sourceUrl: string;
        };
    };
}
