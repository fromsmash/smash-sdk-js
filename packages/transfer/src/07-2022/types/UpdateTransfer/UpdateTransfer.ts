export interface UpdateTransferInput {
    transferId: string;
    size?: number;
    filesNumber?: number;
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
    };

    customization?: {
        logo?: string;
        background?: string;
    };

    promotion?: {
        id: string;
    };

    preview?: string;
    password?: string;
    notificationType?: string;
    description?: string;
}

export interface UpdateTransferOutput {
    transfer: {
        id: string;
        size: number;
        title?: string;
        description?: string;
        status: "Uploading" | "Processing" | "Uploaded" | "Deleting" | "Deleted" | "Expired" | "Suspended" | "Dirty";
        region:
            | "us-east-1"
            | "us-east-2"
            | "us-west-1"
            | "us-west-2"
            | "ap-south-1"
            | "ap-northeast-3"
            | "ap-northeast-2"
            | "ap-southeast-1"
            | "ap-southeast-2"
            | "ap-northeast-1"
            | "ca-central-1"
            | "eu-central-1"
            | "eu-west-1"
            | "eu-west-2"
            | "eu-west-3"
            | "eu-north-1"
            | "sa-east-1"
            | "af-south-1"
            | "ap-east-1"
            | "ap-south-2"
            | "ap-southeast-3"
            | "eu-south-1"
            | "eu-south-2"
            | "eu-central-2"
            | "me-south-1"
            | "me-central-1";
        domain: string;
        preview: "Full" | "None";
        created: string;
        deleted: string;
        modified: string;
        language: string;
        filesNumber: number;
        transferUrl: string;
        uploadState: "Draft" | "Lock";
        promotion: {
            id: string;
            url: string;
        };
        customization?: {
            logo?: {
                type: "Image" | "Youtube" | "Vimeo";
                sourceId: string;
                sourceUrl: string;
                thumbnail: string;
            };
            background?: {
                type: "Image" | "Youtube" | "Vimeo";
                sourceId: string;
                sourceUrl: string;
                thumbnail: string;
            };
        };
        availabilityEndDate: string;
        availabilityDuration: number;
        availabilityStartDate: string;
        delivery?: {
            type: "Email" | "Link";
            sender: {
                name?: string;
                email: string;
            };
            receivers?: string[];
            slack?: {
                me: string;
                team: string;
                channel: string;
                channelName: string;
            };
        };
        accessTracking: "None" | "Email";
        queuedUntil: string;
        queue: number;
    };
}
