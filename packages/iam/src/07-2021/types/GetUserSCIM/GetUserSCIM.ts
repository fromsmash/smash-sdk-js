export interface GetUserSCIMInput {
    userId: string;
}

export interface GetUserSCIMOutput {
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
