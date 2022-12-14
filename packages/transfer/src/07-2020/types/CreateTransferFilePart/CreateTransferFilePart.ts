export interface CreateTransferFilePartInput {
    transferId: string;
    fileId: string;
    id: number;
}

export interface CreateTransferFilePartOutput {
    part: {
        id: number;
        url: string;
        endIndex: number;
        startIndex: number;
        transferfile: string;
        maxChunkSize: number;
        lengthToRead: number;
        urlExpiration: string;
    };
}
