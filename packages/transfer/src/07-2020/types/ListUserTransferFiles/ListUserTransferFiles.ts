export interface ListUserTransferFilesInput {
    userId: string;
    transferId: string;
}

export interface ListUserTransferFilesOutput {
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
