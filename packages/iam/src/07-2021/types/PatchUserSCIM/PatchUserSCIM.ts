export interface PatchUserSCIMInput {
    userId: string;

    schemas: string[];

    Operations: {
        [key: string]: unknown;
        op: string;
        path?: string;
    }[];
}

export interface PatchUserSCIMOutput {
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

    locale: string;
    active: string;

    groups: {
        display: string;
        value: string;
    }[];
}
