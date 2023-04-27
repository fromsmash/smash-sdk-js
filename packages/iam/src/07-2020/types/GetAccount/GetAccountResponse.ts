import { GetAccountOutput } from "./GetAccount";
import { NotFoundError } from "./GetAccountError";

export type GetAccountResponse = GetAccountOutput | NotFoundError;
