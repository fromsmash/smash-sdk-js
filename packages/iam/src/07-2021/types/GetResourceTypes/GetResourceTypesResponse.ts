import { GetResourceTypesOutput } from "./GetResourceTypes";
import { BadRequestError } from "./GetResourceTypesError";

export type GetResourceTypesResponse = GetResourceTypesOutput | BadRequestError;
