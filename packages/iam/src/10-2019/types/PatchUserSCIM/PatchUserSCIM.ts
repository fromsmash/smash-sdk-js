export interface PatchUserSCIMInput {
    id: string;

    schemas: string[];

    Operations: {
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

    displayName: string;
    locale: string;
    active: string;
    groups: {
        display: string;
        value: string;
    }[];
}
