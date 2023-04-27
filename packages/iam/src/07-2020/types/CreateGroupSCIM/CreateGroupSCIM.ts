export interface CreateGroupSCIMInput {
    schemas: string[];

    externalId?: string;
    displayName: string;
    meta?: {
        resourceType?: string;
    };

    members?: {
        display?: string;
        value: string;
    }[];
}

export interface CreateGroupSCIMOutput {
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
