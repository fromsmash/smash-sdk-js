export interface UpdateGroupSCIMInput {
    groupId: string;

    schemas: string[];

    displayName?: string;
    groupType?: string;

    members?: {
        display?: string;
        value: string;
    }[];
}

export interface UpdateGroupSCIMOutput {
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
