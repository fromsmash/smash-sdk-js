export interface GetTeamPromotionInput {
    teamId: string;
    promotionId: string;
}

export interface GetTeamPromotionOutput {
    promotion: {
        id: string;
        title: string;
        created: string;
        button?: string;
        status: "Enabled" | "Disabled";
        target: "External" | "Internal";
        teaser?: string;
        link?: string;
        text?: string;
        language: string;
        click: number;
        view: number;
        medias: {
            id: string;
            type: "Image" | "Youtube" | "Vimeo";
            sourceId: string;
            thumbnail: string;
            sourceUrl: string;
        }[];
    };
}
