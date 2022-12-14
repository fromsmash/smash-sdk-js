export interface ListTeamTransferFilesInput {
    teamId: string;
    transferId: string;
}

export interface ListTeamTransferFilesOutput {
    files: {
        id: string;
        key: string;
        transfer: string;
        chunkSize: number;
        partsCount: number;
        uploadState: string;
        maxInlineParts: number;
        ext: string;
        size: number;
        name: string;
        views: number;
        crc32: number;
        downloads: number;
    }[];
}
