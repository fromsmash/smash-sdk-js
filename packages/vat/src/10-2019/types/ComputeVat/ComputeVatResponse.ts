import { ComputeVatOutput } from "./ComputeVat";
import { InvalidParameterError, NotFoundError } from "./ComputeVatError";

export type ComputeVatResponse = ComputeVatOutput | InvalidParameterError | NotFoundError;
