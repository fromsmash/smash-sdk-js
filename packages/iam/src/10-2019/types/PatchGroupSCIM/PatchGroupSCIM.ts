export interface PatchGroupSCIMInput {
    id: string;

    schemas: string[];

    Operations: {
        op: string;
        path?: string;
    }[];
}

export interface PatchGroupSCIMOutput {
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
