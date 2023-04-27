import { ExecutePaypalPaymentOutput } from "./ExecutePaypalPayment";
import { InvalidParameterError, ConflictError } from "./ExecutePaypalPaymentError";

export type ExecutePaypalPaymentResponse = ExecutePaypalPaymentOutput | InvalidParameterError | ConflictError;
