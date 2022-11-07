export interface GetTeamTransferQueueInput {
    teamId: string;
    size: string;
}

export interface GetTeamTransferQueueOutput {
    queue: number;
}
