export interface GetGroupInput {
    groupId: string;
}

export interface GetGroupOutput {
    group: {
        id: string;
        name: string;
        created: string;
        modified: string;
        usersCount: number;
        provisioned: boolean;
    };
}
