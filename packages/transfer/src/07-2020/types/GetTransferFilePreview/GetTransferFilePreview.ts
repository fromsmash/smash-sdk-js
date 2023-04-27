export interface GetTransferFilePreviewInput {
    transferId: string;
    fileId: string;
    "smash-authorization"?: string;
}

export interface GetTransferFilePreviewOutput {
    file: {
        id: string;
        ext: string;
        size: number;
        name: string;
        crc32: number;
        preview: string;
        download: string;
        thumbnail: string;
    };

    urlsExpiredAt: string;
}
