export interface CreateTransferSignedUrlsInput {
    transferId: string;
    e?: string;

    files?: {
        id: string;
    }[];
}

export interface CreateTransferSignedUrlsOutput {
    transfer: {
        id: string;
        url: string;
        files: {
            id: string;
            url: string;
        }[];
    };

    urlsExpiredAt: string;
}
