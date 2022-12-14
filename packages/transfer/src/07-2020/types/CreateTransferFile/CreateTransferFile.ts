export interface CreateTransferFileInput {
    transferId: string;
    name: string;
    size: number;
}

export interface CreateTransferFileOutput {
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
        crc32?: number;
        region: string;
        bucket: string;
        previewsLocation?: string;
        views: number;
        downloads: number;
        parts: {
            id: number;
            url: string;
            endIndex: number;
            startIndex: number;
            maxChunkSize: number;
            transferfile: string;
            lengthToRead: number;
            urlExpiration: string;
        }[];
    };
}
