export interface ListUserTransferEventsInput {
    userId: string;
    transferId: string;
}

export interface ListUserTransferEventsOutput {
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
