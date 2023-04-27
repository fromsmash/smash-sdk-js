export interface GetUserUsageInput {
    userId: string;
}

export interface GetUserUsageOutput {
    usage: {
        bytesDownloaded: number;
        bytesUploaded: number;
        bytesTotal: number;
    };
}
