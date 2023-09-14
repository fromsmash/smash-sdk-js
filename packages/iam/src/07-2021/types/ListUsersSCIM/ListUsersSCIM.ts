export interface ListUsersSCIMInput {
    startIndex?: number;
    count?: number;
    filter?: string;
    excludedAttributes?: string;
}

export interface ListUsersSCIMOutput {
    schemas: string[];

    totalResults: number;
    itemsPerPage: number;
    startIndex: number;

    Resources: {
        schemas: string[];
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
        active: boolean;
        groups: {
            display: string;
            value: string;
        }[];
    }[];
}
