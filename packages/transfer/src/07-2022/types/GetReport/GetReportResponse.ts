import { GetReportOutput } from "./GetReport";
import { BadRequestError, NotFoundError } from "./GetReportError";

export type GetReportResponse = GetReportOutput | BadRequestError | NotFoundError;
