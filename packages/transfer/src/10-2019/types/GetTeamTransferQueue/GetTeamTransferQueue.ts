export interface GetTeamTransferQueueInput {
    teamId: string;
    size: number;
}

export interface GetTeamTransferQueueOutput {
    queue: number;
}
