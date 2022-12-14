export interface GetTransferFilePreviewInput {
    transferId: string;
    fileId: string;
}

export interface GetTransferFilePreviewOutput {
    file: {
        id: string;
        ext: string;
        size: number;
        name: string;
        crc32: number;
        preview: {};
        download: string;
        thumbnail: string;
    };

    urlsExpiredAt: string;
}
