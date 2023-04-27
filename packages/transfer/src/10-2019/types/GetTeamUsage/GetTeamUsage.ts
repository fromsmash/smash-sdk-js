export interface GetTeamUsageInput {
    teamId: string;
}

export interface GetTeamUsageOutput {
    usage: {
        bytesDownloaded: number;
        bytesUploaded: number;
        bytesTotal: number;
    };
}
