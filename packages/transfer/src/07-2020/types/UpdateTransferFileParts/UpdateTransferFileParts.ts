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
    }[];
}
