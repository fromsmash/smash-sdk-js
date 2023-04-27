export interface GetUsageInput {}

export interface GetUsageOutput {
    usage: {
        bytesDownloaded: number;
        bytesUploaded: number;
        bytesTotal: number;
    };
}
