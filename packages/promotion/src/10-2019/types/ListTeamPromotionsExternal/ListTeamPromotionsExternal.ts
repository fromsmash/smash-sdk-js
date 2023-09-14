export interface ListTeamPromotionsExternalInput {
    teamId: string;
}

export interface ListTeamPromotionsExternalOutput {
    promotions: {
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
    }[];
}
