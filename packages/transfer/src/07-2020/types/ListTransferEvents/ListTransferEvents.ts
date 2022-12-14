export interface ListTransferEventsInput {
    transferId: string;
}

export interface ListTransferEventsOutput {
    events: {
        transferId: string;
        accessDate: string;
        type: string;
        account: string;
        userId: string;
        userAccount: string;
        email: string;
        resource: string;
        fileId: string;
    }[];
}
