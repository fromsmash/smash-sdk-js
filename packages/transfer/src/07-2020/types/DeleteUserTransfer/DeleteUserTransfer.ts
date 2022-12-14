export interface DeleteUserTransferInput {
    userId: string;
    transferId: string;
}

export interface DeleteUserTransferOutput {
    transfer: {
        id: string;
        size: number;
        title: string;
        status: string;
        region: string;
        preview: string;
        created: string;
        deleted: string;
        modified: string;
        language: string;
        filesNumber: number;
        uploadState: string;
        transferUrl: string;
        availabilityEndDate: string;
        availabilityDuration: number;
        availabilityStartDate: string;
    };
}
