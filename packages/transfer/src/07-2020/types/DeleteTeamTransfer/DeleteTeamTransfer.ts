export interface DeleteTeamTransferInput {
    teamId: string;
    transferId: string;
}

export interface DeleteTeamTransferOutput {
    transfer: {
        id: string;
        size: number;
        title?: string;
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
        preview: "Full" | "None";
        created: string;
        deleted: string;
        modified: string;
        language: "en" | "fr" | "de" | "es" | "pt" | "it";
        filesNumber: number;
        uploadState: string;
        transferUrl: string;
        availabilityEndDate: string;
        availabilityDuration: number;
        availabilityStartDate: string;
    };
}
