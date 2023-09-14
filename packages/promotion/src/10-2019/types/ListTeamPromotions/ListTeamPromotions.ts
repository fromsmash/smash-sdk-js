export interface ListTeamPromotionsInput {
    teamId: string;
}

export interface ListTeamPromotionsOutput {
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
