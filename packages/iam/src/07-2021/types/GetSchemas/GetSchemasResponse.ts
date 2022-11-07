import { GetSchemasOutput } from "./GetSchemas";
import { BadRequestError } from "./GetSchemasError";

export type GetSchemasResponse = GetSchemasOutput | BadRequestError;
