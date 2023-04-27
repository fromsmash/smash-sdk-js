import { VerifyVatNumberOutput } from "./VerifyVatNumber";
import { InvalidParameterError } from "./VerifyVatNumberError";

export type VerifyVatNumberResponse = VerifyVatNumberOutput | InvalidParameterError;
