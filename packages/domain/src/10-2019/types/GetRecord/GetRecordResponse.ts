import { GetRecordOutput } from "./GetRecord";
import { BadRequestError, NotFoundError } from "./GetRecordError";

export type GetRecordResponse = GetRecordOutput | BadRequestError | NotFoundError;
