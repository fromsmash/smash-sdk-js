export interface ListTransferFilesInput {
    transferId: string;
    limit?: number;
    start?: string;
    sort?: "asc" | "desc";
}

export interface ListTransferFilesOutput {
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

    next: string;
}
