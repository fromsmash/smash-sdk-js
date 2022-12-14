export interface UpdateTransferFileInput {
    transferId: string;
    fileId: string;

    parts?: {
        etag: string;
        crc32: number;
        id: number;
    }[];
}

export interface UpdateTransferFileOutput {
    file: {
        id: string;
        region: string;
        transfer: string;
        chunkSize: number;
        partsCount: number;
        uploadState: string;
        maxInlineParts: number;
    };
}
