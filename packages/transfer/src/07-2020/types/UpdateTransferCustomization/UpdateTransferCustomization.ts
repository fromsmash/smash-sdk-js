export interface UpdateTransferCustomizationInput {
    transferId: string;
    customization: {
        logo?: string;
        background?: string;
    };
}

export interface UpdateTransferCustomizationOutput {
    transfer: {
        id: string;
        size: number;
        title: string;
        status: string;
        region: string;
        domain: string;
        preview: string;
        created: string;
        deleted: string;
        modified: string;
        language: string;
        filesNumber: number;
        transferUrl: string;
        uploadState: string;
        promotion: {
            id: string;
            url: string;
        };
        customization: {
            logo: {
                type: string;
                sourceId: string;
                sourceUrl: string;
                thumbnail: string;
            };
            background: {
                type: string;
                sourceId: string;
                sourceUrl: string;
                thumbnail: string;
            };
        };
        availabilityEndDate: string;
        availabilityDuration: string;
        availabilityStartDate: string;
        delivery?: {
            type: string;
            sender: {
                name?: string;
                email: string;
            };
            receivers?: string[];
            slack: {
                me: string;
                team: string;
                channel: string;
                channelName: string;
            };
            teams: {};
        };
    };
}
