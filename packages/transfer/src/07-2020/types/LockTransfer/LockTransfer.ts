export interface LockTransferInput {
    transferId: string;
}

export interface LockTransferOutput {
    transfer: {
        id: string;
        title: string;
        region: string;
        domain: string;
        status: string;
        preview: string;
        created: string;
        deleted: string;
        modified: string;
        language: string;
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
        transferUrl: string;
        uploadState: string;
        description: string;
        notificationType: string;
        availabilityEndDate: string;
        availabilityDuration: number;
        availabilityStartDate: string;
    };
}
