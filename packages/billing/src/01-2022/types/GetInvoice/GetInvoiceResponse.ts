import { GetInvoiceOutput } from "./GetInvoice";
import { InvalidParameterError, NotFoundError } from "./GetInvoiceError";

export type GetInvoiceResponse = GetInvoiceOutput | InvalidParameterError | NotFoundError;
