export interface GetRecordInput {
    name: string;
}

export interface GetRecordOutput {
    record: {
        domain: string;
        team: string;
        region: string;
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
        options: string;
        redirect: string;
    };
}
