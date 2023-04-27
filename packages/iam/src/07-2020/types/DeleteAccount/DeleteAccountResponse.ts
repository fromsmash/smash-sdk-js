import { DeleteAccountOutput } from "./DeleteAccount";
import { NotFoundError } from "./DeleteAccountError";

export type DeleteAccountResponse = DeleteAccountOutput | NotFoundError;
