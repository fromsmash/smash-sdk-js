export interface GetResourceTypesInput {}

export interface GetResourceTypesOutput {
    schemas: string;
    totalResults: string;
    itemsPerPage: string;
    startIndex: string;

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
