export interface GetSchemasInput {}

export interface GetSchemasOutput {
    schemas: string[];

    totalResults: number;
    itemsPerPage: number;
    startIndex: number;

    Resources: {
        id: string;
        name: string;
        description: string;
        attributes: {
            name: string;
            description: string;
            type: string;
            multiValued: string;
            required: string;
            caseExact: string;
            mutability: string;
            returned: string;
            uniqueness: string;
            canonicalValues: string;
            referenceTypes: string;
            subAttributes: {
                name: string;
                description: string;
                type: string;
                multiValued: string;
                required: string;
                caseExact: string;
                mutability: string;
                returned: string;
                uniqueness: string;
                canonicalValues: string;
                referenceTypes: string;
            }[];
        }[];
    }[];
}
