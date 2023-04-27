import { ListRecordProvidersOutput } from "./ListRecordProviders";
import { InvalidParameterError, NotFoundError } from "./ListRecordProvidersError";

export type ListRecordProvidersResponse = ListRecordProvidersOutput | InvalidParameterError | NotFoundError;
