export interface UpdateGroupInput {
    groupId: string;
    name?: string;
}

export interface UpdateGroupOutput {
    group: {
        id: string;
        name: string;
        created: string;
        modified: string;
        usersCount: number;
        provisioned: boolean;
    };
}
