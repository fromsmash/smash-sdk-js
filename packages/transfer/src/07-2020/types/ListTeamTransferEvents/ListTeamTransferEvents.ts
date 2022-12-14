export interface ListTeamTransferEventsInput {
    transferId: string;
    teamId: string;
}

export interface ListTeamTransferEventsOutput {
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
