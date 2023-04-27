export interface UpdateTransferFilePartsInput {
    transferId: string;
    fileId: string;

    parts: {
        etag: string;
        crc32: number;
        id: number;
    }[];
}

export interface UpdateTransferFilePartsOutput {
    parts: {
        id: number;
        etag: string;
        crc32: number;
        url: string;
        endIndex: number;
        startIndex: number;
        maxChunkSize: number;
        lengthToRead: number;
        urlExpiration: string;
        transfer: string;
        file: string;
    }[];
}
