import { GetAccountOutput } from "./GetAccount";
import { BadRequestError } from "./GetAccountError";

export type GetAccountResponse = GetAccountOutput | BadRequestError;
