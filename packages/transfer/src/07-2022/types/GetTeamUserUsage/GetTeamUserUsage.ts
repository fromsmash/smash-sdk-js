export interface GetTeamUserUsageInput {
    teamId: string;
    userId: string;
}

export interface GetTeamUserUsageOutput {
    usage: {
        bytesDownloaded: number;
        bytesUploaded: number;
        bytesTotal: number;
    };
}
