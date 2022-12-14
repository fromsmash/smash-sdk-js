export interface GetUserTransferInput {
    userId: string;
    transferId: string;
}

export interface GetUserTransferOutput {
    transfer: {
        id: string;
        size: number;
        title: string;
        region: string;
        domain: string;
        status: string;
        preview: string;
        created: string;
        deleted: string;
        modified: string;
        language: string;
        filesNumber: number;
        transferUrl: string;
        uploadState: string;
        transferViews: number;
        filesViews: number;
        transferDownloads: number;
        filesDownloads: number;
        description: string;
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
        availabilityDuration: number;
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
        accessTracking: string;
    };
}
