export interface ListTransferFilesPreviewInput {
    transferId: string;
    limit?: number;
    start?: string;
    sort?: string;
}

export interface ListTransferFilesPreviewOutput {
    files: {
        id: string;
        ext: string;
        size: number;
        name: string;
        crc32: number;
        preview: {};
        download: string;
        thumbnail: string;
    }[];

    next: string;
    urlsExpiredAt: string;
}
