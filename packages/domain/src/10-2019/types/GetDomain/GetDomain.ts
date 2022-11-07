export interface GetDomainInput {
    domain: string;
}

export interface GetDomainOutput {
    domain: {
        team: string;
        domain: string;
        region: string;
        options: string;
        background: {
            id: string;
            type: string;
            sourceId: string;
            sourceUrl: string;
            thumbnail: string;
        };
        logo: {
            id: string;
            type: string;
            sourceId: string;
            sourceUrl: string;
            thumbnail: string;
        };
        redirect: string;
    };
}
