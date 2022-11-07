import { ListRecordProvidersOutput } from "./ListRecordProviders";
import { BadRequestError, NotFoundError } from "./ListRecordProvidersError";

export type ListRecordProvidersResponse = ListRecordProvidersOutput | BadRequestError | NotFoundError;
