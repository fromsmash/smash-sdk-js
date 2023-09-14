export interface ListTeamCustomizationsInput {
    teamId: string;
}

export interface ListTeamCustomizationsOutput {
    customizations: {
        id: string;
        name: string;
        description: string;
    }[];
}
