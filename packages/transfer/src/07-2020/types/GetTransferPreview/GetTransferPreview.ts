export interface GetTransferPreviewInput {
    transferId: string;
    e?: string;
}

export interface GetTransferPreviewOutput {
    transfer: {
        id: string;
        size: number;
        title: string;
        region: string;
        domain: string;
        status: string;
        preview: string;
        created: string;
        deleted: string;
        modified: string;
        language: string;
        download: string;
        filesNumber: string;
        transferUrl: string;
        promotion: {
            id: string;
            url: string;
        };
        customization: {
            logo: {
                type: string;
                sourceId: string;
                sourceUrl: string;
                thumbnail: string;
            };
            background: {
                type: string;
                sourceId: string;
                sourceUrl: string;
                thumbnail: string;
            };
        };
        availabilityEndDate: string;
        availabilityDuration: string;
        availabilityStartDate: string;
    };

    urlsExpiredAt: string;
}
