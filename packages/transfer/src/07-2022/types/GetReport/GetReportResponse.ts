import { GetReportOutput } from "./GetReport";
import { InvalidParameterError, NotFoundError } from "./GetReportError";

export type GetReportResponse = GetReportOutput | InvalidParameterError | NotFoundError;
