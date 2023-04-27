import { DeleteReportOutput } from "./DeleteReport";
import { InvalidParameterError, NotFoundError, TransferNotUploadedError } from "./DeleteReportError";

export type DeleteReportResponse = DeleteReportOutput | InvalidParameterError | NotFoundError | TransferNotUploadedError;
