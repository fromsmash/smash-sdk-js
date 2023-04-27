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
        maxChunkSize: number;
        lengthToRead: number;
        urlExpiration: string;
        transfer: string;
        file: string;
        transferfile: string;
    }[];
}
