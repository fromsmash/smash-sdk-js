export interface CreateUserSCIMInput {
    schemas: string[];

    externalId?: string;
    userName: string;
    active?: boolean;

    emails?: {
        primary: boolean;
        value: string;
        type?: string;
    }[];

    meta?: {
        resourceType?: string;
    };
    name?: {
        givenName?: string;
        familyName?: string;
        formatted?: string;
    };
    displayName?: string;
    locale?: string;

    groups?: {
        display?: string;
        value: string;
    }[];
}

export interface CreateUserSCIMOutput {
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
