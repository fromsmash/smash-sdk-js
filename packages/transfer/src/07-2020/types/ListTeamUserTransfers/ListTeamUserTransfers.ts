export interface ListTeamUserTransfersInput {
    teamId: string;
    userId: string;
}

export interface ListTeamUserTransfersOutput {
    transfers: {
        id: string;
        size: string;
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
        accessTracking: string;
    }[];
}
