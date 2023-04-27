import { GetRecordOutput } from "./GetRecord";
import { InvalidParameterError, NotFoundError } from "./GetRecordError";

export type GetRecordResponse = GetRecordOutput | InvalidParameterError | NotFoundError;
