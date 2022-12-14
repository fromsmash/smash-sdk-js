export interface GetTransferFileInput {
    transferId: string;
    fileId: string;
}

export interface GetTransferFileOutput {
    file: {
        id: string;
        key: string;
        transfer: string;
        chunkSize: number;
        partsCount: number;
        uploadState: string;
        maxInlineParts: number;
        ext: string;
        name: string;
        size: number;
        crc32: number;
        region: string;
        bucket: string;
        previewsLocation: string;
        views: number;
        downloads: number;
    };
}
