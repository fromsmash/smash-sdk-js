export interface CreateTransferFilePartsInput {
    transferId: string;
    fileId: string;

    parts: {
        id: number;
    }[];
}

export interface CreateTransferFilePartsOutput {
    parts: {
        id: number;
        url: string;
        endIndex: number;
        startIndex: number;
        transferfile: string;
        maxChunkSize: number;
        lengthToRead: number;
        urlExpiration: string;
    }[];
}
