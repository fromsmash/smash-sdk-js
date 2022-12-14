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
    };
}
