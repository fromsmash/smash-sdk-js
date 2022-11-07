export interface ListUsersSCIMInput {
    startIndex?: number;
    count?: number;
    filter?: string;
    excludedAttributes?: string;
}

export interface ListUsersSCIMOutput {
    schemas: string;
    totalResults: string;
    itemsPerPage: string;
    startIndex: string;
    Resources: {
        schemas: string;
        id: string;
        externalId: string;
        meta: {
            resourceType: string;
            created: string;
            lastModified: string;
        };
        userName: string;
        name: {
            formatted: string;
            familyName: string;
            givenName: string;
        };
        emails: {
            primary: string;
            value: string;
            type: string;
            display: string;
        }[];
        displayName: string;
        locale: string;
        active: string;
        groups: {
            display: string;
            value: string;
        }[];
    }[];
}
