export interface UpdateTransferFilePartInput {
    transferId: string;
    fileId: string;
    partId: number;
    etag: string;
    crc32: number;
}

export interface UpdateTransferFilePartOutput {
    part: {
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
    };
}
