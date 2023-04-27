export interface ListGroupsSCIMInput {
    startIndex?: number;
    count?: number;
    filter?: string;
    excludedAttributes?: string;
}

export interface ListGroupsSCIMOutput {
    schemas: string;
    totalResults: number;
    itemsPerPage: string;
    startIndex: number;

    Resources: {
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
    }[];
}
