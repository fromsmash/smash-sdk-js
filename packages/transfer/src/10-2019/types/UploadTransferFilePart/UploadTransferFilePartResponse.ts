interface S3Error {
    Error: {
        Code: string;
        Message: string;
        RequestId: string;
        Resource: string;
    }
}

export type UploadTransferFilePartResponse = undefined | S3Error;
