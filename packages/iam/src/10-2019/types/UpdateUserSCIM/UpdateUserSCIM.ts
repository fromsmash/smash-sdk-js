export interface UpdateUserSCIMInput {
    userId: string;

    schemas?: string[];

    userName?: string;
    name?: {
        givenName?: string;
        familyName?: string;
    };

    emails?: {
        primary: boolean;
        value: string;
        display?: string;
        type?: string;
    }[];

    displayName?: string;
    locale?: string;
    active?: boolean;

    groups?: {
        display?: string;
        value: string;
    }[];
}

export interface UpdateUserSCIMOutput {
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
