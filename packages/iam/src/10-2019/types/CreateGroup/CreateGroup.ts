export interface CreateGroupInput {
    name: string;
}

export interface CreateGroupOutput {
    group: {
        id: string;
        name: string;
        created: string;
        modified: string;
        usersCount: number;
        provisioned: boolean;
    };
}
