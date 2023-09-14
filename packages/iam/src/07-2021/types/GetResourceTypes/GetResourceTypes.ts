export interface GetResourceTypesInput {}

export interface GetResourceTypesOutput {
    schemas: string[];

    totalResults: number;
    itemsPerPage: number;
    startIndex: number;

    Resources: {
        id: string;
        name: string;
        endpoint: string;
        description: string;
        schema: string;
        schemaExtensions: {
            schema: string;
            required: string;
        }[];
    }[];
}
