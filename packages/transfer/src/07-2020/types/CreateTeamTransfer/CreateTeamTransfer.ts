export interface CreateTeamTransferInput {
    teamId: string;
    size: number;
    filesNumber: number;
    domain?: string;
    customUrl?: string;
    language?: string;
    availabilityDuration?: number;
    title?: string;
    delivery?: {
        type: string;
        sender?: {
            name?: string;
            email: string;
        };
        receivers?: string[];
        slack?: {
            token: string;
            me: string;
            team: string;
            channel: string;
            channelName: string;
        };
        teams?: {};
    };

    customization?: {
        logo?: string;
        background?: string;
    };

    promotion?: {
        id: string;
    };

    preview?: string;
    accessTracking?: string;
    password?: string;
    notificationType?: string;
    description?: string;
}

export interface CreateTeamTransferOutput {
    transfer: {
        id: string;
        size: number;
        title: string;
        description?: string;
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
        parallelFiles: number;
        parallelMinParts: number;
        parallelMaxParts: number;
        parallelConnections: number;
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
        };
        accessTracking: string;
        queuedUntil: string;
        queue: number;
    };
}
