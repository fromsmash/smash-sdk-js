export interface DeleteReportInput {
    id: string;
}

export interface DeleteReportOutput {
    transfer: {
        id: string;
        size: string;
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
        availabilityDuration: string;
        availabilityStartDate: string;
    };
}
