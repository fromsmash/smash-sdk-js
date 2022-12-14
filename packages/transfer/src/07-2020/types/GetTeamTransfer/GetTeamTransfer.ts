export interface GetTeamTransferInput {
    teamId: string;
    transferId: string;
}

export interface GetTeamTransferOutput {
    transfer: {
        id: string;
        size: number;
        title: string;
        region: string;
        domain: string;
        created: string;
        status: string;
        preview: string;
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
