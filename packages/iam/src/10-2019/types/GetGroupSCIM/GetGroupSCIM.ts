export interface GetGroupSCIMInput {
    id: string;
}

export interface GetGroupSCIMOutput {
    schemas: string;
    id: string;
    displayName: string;
    externalId: string;
    members: {
        display: string;
        value: string;
    }[];

    meta: {
        resourceType: string;
        created: string;
        lastModified: string;
    };
}
