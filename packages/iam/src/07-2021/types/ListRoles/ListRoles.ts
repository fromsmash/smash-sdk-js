export interface ListRolesInput {}

export interface ListRolesOutput {
    roles: {
        name: string;
        description: string;
    }[];
}
