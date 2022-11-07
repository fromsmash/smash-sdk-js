import { DeleteAccountOutput } from "./DeleteAccount";
import { BadRequestError } from "./DeleteAccountError";

export type DeleteAccountResponse = DeleteAccountOutput | BadRequestError;
