import { DeleteReportOutput } from "./DeleteReport";
import { BadRequestError, NotFoundError, TransferNotUploadedError } from "./DeleteReportError";

export type DeleteReportResponse = DeleteReportOutput | BadRequestError | NotFoundError | TransferNotUploadedError;
